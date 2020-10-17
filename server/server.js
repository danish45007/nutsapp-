// base imports
const Path = require("path");
require('dotenv').config({ path: Path.join(__dirname, `.env.staging`) });
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose') 

// init app
const app = express();
const port = process.env.PORT || 8000

// importing routes
const messageRoutes = require('./routes/Messages')

// middleware
app.use(express.json())
app.use(morgan('short'))

// using routes
app.use('/v1/api',messageRoutes);

// db connect
mongoose.connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("Connected to DB"))
.catch((err) => console.log(err))

// health check endpoint
app.get('/', (req, res) => res.send("Hello World").status(200))

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))