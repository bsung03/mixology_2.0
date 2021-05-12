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



# post request -------------------------------------------------------------------------
# test_post = {"username" : "vskdfs", "email" : "fac@asdf.com", "password" : "thaaaaaa"}
# x = recipes_collection.insert_one(test_post)
# print(x.inserted_id)



# get request----------------------------------------------------------------------------
# test_post = {"username" : "vskdfs"}
# doc = collection.find(test_post)

# for x in doc:
#     print(x)







class Recipe:
    def __init__(self, name, _id, category, thumb, alc, glass, instructions):
        self.name = name
        self.id = _id
        self.category = category
        self.thumb = thumb
        self.ingredients = []
        self.alc = alc
        self.glass = glass
        self.instructions = instructions




allrecipes = []

with open('all_drinks.csv','r') as csvfile:
    lines = csv.reader(csvfile, delimiter=',')
    for col in lines:

        name = col[1]
        if(name == 'strDrink'):
            continue
        _id = col[0]
        category = col[5]
        thumb = col[6]
        alc = col[4]
        glass = col[7]
        instructions = col[24]

        # print(instructions)
        rec = Recipe(name,_id,category,thumb,alc,glass, instructions)


        # find all ingrdients
        for i in range(15):
            ingredient_index = i + 9
            measure_index = i + 25

            if(col[ingredient_index] != '' and col[ingredient_index] != ' ' and col[ingredient_index] != '\n'):
                # print(col[ingredient_index])
                ingredient_name = col[ingredient_index]
                if(col[measure_index] != ''):
                    ingredient_measurement = col[measure_index]
                    # print(col[measure_index])
                else:
                    # print("no measurement")
                    ingredient_measurement = "n/a"
            
                part = (ingredient_name, ingredient_measurement)
                rec.ingredients.append(part)
            

        allrecipes.append(rec)

for r in allrecipes:

    recipe_post = {"name" : r.name, "category" : r.category, "thumb" : r.thumb, "alc" : r.alc, "glass" : r.glass, "instructions" : r.instructions}
    x = recipes_collection.insert_one(recipe_post)
    print(x.inserted_id)

    for j in r.ingredients:
        y = recipes_collection.update_one({"name" : r.name}, {'$push' : {'Recipe_Ingredients' : {"name" : j[0], "measurement" : j[1]}}})
        # print(y.inserted_id)




    print(r.name)
    # print(r.category)
    # print(len(r.ingredients))
    # for j in r.ingredients:
    #     print(j)
    # break