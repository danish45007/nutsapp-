/* global beforeAll beforeEach afterEach afterAll */

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;
const Pusher = require('pusher');
async function removeAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		await collection.deleteMany();
	}
}

async function dropAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		try {
			await collection.drop();
		} catch (error) {
			// Sometimes this error happens, but you can safely ignore it
			if (error.message === 'ns not found') return;
			// This error occurs when you use it.todo. You can
			// safely ignore this error too
			if (error.message.includes('a background operation is currently running'))
				return;
			console.log(error.message);
		}
	}
}

module.exports = {
	setupDB(databaseName, runSaveMiddleware = false) {
		// Connect to Mongoose
		beforeAll(async () => {
			const url = `mongodb://localhost:27017/${databaseName}`;
			await mongoose.connect(url, { useNewUrlParser: true });
		});

		// Seeds database before each test
		beforeEach(async () => {
			const pusher = new Pusher({
				appId: process.env.appId,
				key: process.env.key,
				secret: process.env.secret,
				cluster: 'ap2',
			});
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
		});

		// Cleans up database between each test
		afterEach(async () => {
			await removeAllCollections();
		});

		// Disconnect Mongoose
		afterAll(async () => {
			await dropAllCollections();
			await mongoose.connection.close();
		});
	},
};
