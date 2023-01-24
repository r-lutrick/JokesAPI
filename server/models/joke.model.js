const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "Must have at least 10 characters."]
    },

    punchline: {
        type: String,
        minLength: [3, "Must have at least 3 characters."]
    }
}, {timestamps: true})

module.exports = mongoose.model("Joke", JokeSchema)