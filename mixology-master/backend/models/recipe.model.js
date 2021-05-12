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
        category: {
            type: String,
            required: true
        },
        thumb: {
            type: String,
            required: true
        },
        alc: {
            type: String,
            required: true
        },
        glass: {
            type: String,
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