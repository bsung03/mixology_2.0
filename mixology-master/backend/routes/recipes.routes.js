const router = require('express').Router();

let Recipe = require('../models/recipe.model');

router.route('/').get((req,res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/add').post((req,res) => {
    const name = req.body.name;


    const newRecipe = new Recipe({name});

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router