from pymongo import MongoClient
from pprint import pprint


client = MongoClient("mongodb://tttUser:tttPwd@cluster0-shard-00-00.t4kk3.mongodb.net:27017,cluster0-shard-00-01.t4kk3.mongodb.net:27017,cluster0-shard-00-02.t4kk3.mongodb.net:27017/tttCours?ssl=true&replicaSet=atlas-137xeu-shard-0&authSource=admin&retryWrites=true&w=majority")
db=client.admin

# Issue the serverStatus command and print the results
serverStatusResult=db.command("serverStatus")
pprint(serverStatusResult)