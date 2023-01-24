const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')

const Routes = require('./routes/jokes.route')
Routes(app)

const port = 8000
app.listen(port, () => console.log(`Listening on port: ${port}`))