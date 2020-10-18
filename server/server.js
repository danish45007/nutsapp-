// base imports
const Path = require("path");
require('dotenv').config({ path: Path.join(__dirname, `.env.staging`) });
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors'); 
var Pusher = require('pusher');

// init app
const app = express();
const port = process.env.PORT || 8000

const pusher = new Pusher({
    appId: process.env.appId,
    key: process.env.key,
    secret: process.env.secret,
    cluster: 'ap2',
    encrypted: true
  });

// importing routes
const messageRoutes = require('./routes/Messages')

// middleware
app.use(express.json())
app.use(morgan('short'))
app.use(cors())


// using routes
app.use('/v1/api',messageRoutes);

// db connect
mongoose.connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("Connected to DB"))
.catch((err) => console.log(err))

// pusher event-trigger functionality
const db = mongoose.connection;
db.once("open", () => {
    console.log("DB is running!!!")
    const messageCollection = db.collection('Message');
    const changeStream = messageCollection.watch();
    // console.log(messageCollection)
    changeStream.on("change",(change) => {
        console.log(change)
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument
            // inserting data to pusher
            pusher.trigger('Message', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received

            })
        } else {
            console.log("Error triggering the pusher")
        }
    })
})


// health check endpoint
app.get('/', (req, res) => res.send("Hello World").status(200))

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))