const Jokes = require('../controllers/joke.controller')

module.exports = (app) => {
    // Read All
    app.get("/api/joke/all", Jokes.getJokes)
    // Read One
    app.get("/api/joke/get/:id", Jokes.oneJoke)

    // Create
    app.post("/api/joke/create", Jokes.addJoke)
    
    // Update
    app.put("/api/joke/update/:id", Jokes.updateJoke)

    // Delete
    app.delete("/api/joke/delete/:id", Jokes.deleteJoke)
}