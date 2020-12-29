const app = require('./app');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
var Pusher = require('pusher');

const pusher = new Pusher({
	appId: process.env.appId,
	key: process.env.key,
	secret: process.env.secret,
	cluster: 'ap2',
});

// db connect
mongoose
	.connect(process.env.DB, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to DB'))
	.catch((err) => console.log(err));

// pusher event-trigger functionality
const db = mongoose.connection;
db.once('open', () => {
	console.log('DB is running!!!');
	const messageCollection = db.collection('Message');
	const changeStream = messageCollection.watch();
	// console.log(messageCollection)
	changeStream.on('change', (change) => {
		console.log(change);
		if (change.operationType === 'insert') {
			const messageDetails = change.fullDocument;
			// inserting data to pusher
			pusher.trigger('Message', 'inserted', {
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			});
		} else {
			console.log('Error triggering the pusher');
		}
	});
});

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
