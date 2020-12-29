// base imports

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// init app
const app = express();
// importing routes
const messageRoutes = require('./routes/Messages');
// middleware
app.use(express.json());
app.use(morgan('short'));
app.use(cors());
// using routes
app.use('/v1/api', messageRoutes);
// health check endpoint
app.get('/', (_, res) => {
	return res.status(200).json({
		msg: 'Welcome to nuts-app',
	});
});
module.exports = app;
