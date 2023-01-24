const Joke = require('../models/joke.model')

// Read All
module.exports.getJokes = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

// Read One
module.exports.oneJoke = (req, res) => {
    const idParam = req.params.id
    Joke.findOne({_id: idParam})
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

// Create
module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

// Update
module.exports.updateJoke = (req, res) => {
    const idParam = req.params.id
    const newValue = req.body
    Joke.findOneAndUpdate({_id: idParam}, newValue, {new:true})
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

// Delete
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}