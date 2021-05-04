const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        Recipe_Ingredients: [
            {
                _id: String,
                name: {type: String, required: true},
                measurement: {type: String, required: true}
            }
        ]
    },
    {timestamps: true}
);

const Recipe = mongoose.model('Recipe',recipeSchema);

module.exports = Recipe;