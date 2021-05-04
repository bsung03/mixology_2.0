const router = require('express').Router();

let Ingredient = require('../models/ingredient.model');

router.route('/').get((req,res) => {
    Ingredient.find()
        .then(ingredients => res.json(ingredients))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/add').post((req,res) => {
    const name = req.body.name;


    const newIngredient = new Ingredient({name});

    newIngredient.save()
        .then(() => res.json('Ingredient added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router