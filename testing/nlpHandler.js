const { NlpManager, NerManager } = require('node-nlp');
const compromise = require('compromise');
const natural = require('natural');

const manager = new NlpManager({ languages: ['en'], ner: { threshold: 1 }, });
const nerManager = manager.container.get('ner');

const Questions = require('./Questions.json');
const namedEntities = require('./namedEntities.json')
// const fs = require('fs');

for (let QuestionsIntent of Questions) {
    for (let question in QuestionsIntent) {
        manager.addDocument('en', question, QuestionsIntent[question])
    }
}
for(let namedEntitie of namedEntities){
    manager.addNamedEntityText(namedEntitie.entity,namedEntitie.option,namedEntitie.languages,namedEntitie.sourceTexts)
}

manager.addBetweenCondition('en', 'column',['that','have','that have','where','with'], ['is','as','greater','less','equal','more']);
manager.addBetweenCondition('en', 'aggColumn',["max", "maximum","highest","largest", "min", "minimum","smallest","lowest","avg", "average" , "net","cumulative",'sum'], ['of','from']);


manager.addAfterLastCondition('en', 'colData', ['is','as','than','equals','equal to']);
manager.train();

const handler={

    processSentence:async function (sentence){

        try {
            
        let result  =  await manager.process('en',sentence);
        // .then(result => {
        console.log( JSON.stringify(result,null,2));

        let table = result.entities.filter((element)=>{
            return element.entity === 'table'
        })[0];
        let operator = result.entities.filter((element)=>{
            return element.entity === 'operator'
        })[0];
        let column = result.entities.filter((element)=>{
            return element.entity === 'column'
        })[0];
        let aggColumn = result.entities.filter((element)=>{
            return element.entity === 'aggColumn'
        })[0];
        let agg = result.entities.filter((element)=>{
            return element.entity === 'agg'
        })[0];
        let colData = result.entities.filter((element)=>{
            return element.entity === 'colData'
        })[0];

        let sql;

        if(result.intent == "select"){
            sql=`select * from ${table.option}`;
        }

        if(result.intent == "select.where"){
            sql=`select * from ${table.option} where ${column.sourceText} ${operator.option} ${colData.sourceText}`;
        }

        if(result.intent == "count"){
            sql=`select count(*) from ${table.option}`;
        }

        if(result.intent == "count.where"){
            sql=`select count(*) from ${table.option} where ${column.sourceText} ${operator.option} ${colData.sourceText}`;
        }

        if(result.intent == "agg"){

            sql=`select ${agg.option}(${(aggColumn.sourceText)?(aggColumn.sourceText):('*')}) from ${table.option}`;
        }

        if(result.intent == "agg.where"){

            sql=`select ${agg.option}(${(aggColumn.sourceText)?(aggColumn.sourceText):('*')}) from ${table.option} where ${column.sourceText} ${operator.option} ${colData.sourceText}`;
        }
        console.log(sql)

        return sql;


    } catch (error) {
            return error.message;
    }
        
    }
};



module.exports = handler;