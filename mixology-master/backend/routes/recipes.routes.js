const router = require('express').Router();

let Recipe = require('../models/recipe.model');

router.route('/').get((req,res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/addingredient/:id').post((req,res) => {
    Recipe.findById(req.params.id).then(recipe => {

        recipe.Recipe_Ingredients.push({
            name: req.body.name,
            measurement: req.body.measurement
        })
        // recipe.name = req.body.name

        recipe.save()
        .then(() => res.json('Ingredient added to recipe'))
        .catch(err => res.status(400).json('Error: ' + err))

    }).catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name;


    const newRecipe = new Recipe({name});

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router