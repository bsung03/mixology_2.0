const router = require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/mypantry/add/').post((req,res) => {
    User.findById(req.body.id)
        .then(user => {
            user.myPantry.push(req.body.ingredient_name)
            user.save()
            res.json("added ingredient to my pantry")
        }).catch(err => res.status(400).json('Error ' + err));
})

// router.route('/getmypantry/:id').get((req,res) => {
//     User.findById(req.params.id)
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json('Error ' + err));
// })

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const myPantry = []

    const newUser = new User({username,email,password,myPantry});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router