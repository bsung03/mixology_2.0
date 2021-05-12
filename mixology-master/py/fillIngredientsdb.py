import json
import csv
import pymongo
from pymongo import MongoClient

connectstring = 'mongodb+srv://bsung:StephanieIngSung12@main.cy2mr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
cluster = MongoClient(connectstring)
db = cluster["<dbname>"]
users_collection = db["users"]
recipes_collection = db["recipes"]
ingredients_collection = db["ingredients"]


all_unique_ingredients = []


recs = recipes_collection.find()
for r in recs:
    # print(r['name'])
    recipe_ingredients = r['Recipe_Ingredients']
    for i in recipe_ingredients:

        name = i['name']
        name = name.casefold()
        if(name.endswith(' ') or name.endswith('\n')):
            name = name[:-1]
        
        


        if name not in all_unique_ingredients:
            all_unique_ingredients.append(name)

all_unique_ingredients.sort()
for x in all_unique_ingredients:
    ingredient_post = {"name" : x}
    y = ingredients_collection.insert_one(ingredient_post)
    print(x)
    print(y.inserted_id)
print(len(all_unique_ingredients))
    