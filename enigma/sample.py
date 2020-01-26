import subprocess
import os

q = "Show all city"
query = "python3 -m ln2sql.main -d database_store/city.sql -l lang_store/english.csv -j output.json -i " + '"' + q + '"'
os.system(query)

