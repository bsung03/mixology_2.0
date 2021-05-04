const router = require('express').Router();

let Recipe = require('../models/recipe.model');
let Ingredient = require('../models/ingredient.model');


//---------------Get ALL Recipes----------------------//
router.route('/').get((req,res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error ' + err));
})


//---------------Get Specific Recipe----------------------//
router.route('/:id').get((req,res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error ' + err));
})









//---------------Add Ingredient from Recipe----------------------//
router.route('/addingredient/:id').post((req,res) => {
    Recipe.findById(req.params.id).then(recipe => {

        Ingredient.findOne({name: req.body.name}).then(ingredient => {
            recipe.Recipe_Ingredients.push({
                _id: ingredient.id,
                name: req.body.name,
                measurement: req.body.measurement,
            })
            
            recipe.save()
            res.json("Added Ingredient to recipe")
        }).catch(err => res.status(400).json("Could not find ingredient"))
        // recipe.Recipe_Ingredients.push({
        //     _id = id,
        //     name: req.body.name,
        //     measurement: req.body.measurement
        // })
        
        // recipe.save()
        // res.json("Added Ingredient to recipe")

    }).catch(err => res.status(400).json('Error: ' + err))
})


//---------------Clear Ingredients from Recipe----------------------//
router.route('/clearingredients/:id').post((req,res) => {
    Recipe.findById(req.params.id).then(recipe => {

        recipe.Recipe_Ingredients = []

        recipe.save()
        .then(() => res.json('Ingredients cleared from recipe'))
        .catch(err => res.status(400).json('Error: ' + err))

    }).catch(err => res.status(400).json('Error: ' + err))
})









//---------------Create New Recipe----------------------//
router.route('/add').post((req,res) => {
    const name = req.body.name;


    const newRecipe = new Recipe({name});

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router