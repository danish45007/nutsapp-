const request = require('supertest');
const app = require('../app');
// health-check test
test('should return welocme response', () => {
	request(app)
		.get('/')
		.expect(200)
		.end((err, res) => {
			if (err) {
				throw err;
			}
		});
});

// post a message
test('should return message create response', () => {
	request(app)
		.post('/v1/api/messages/new')
		.send({
			message: 'I am unable to get message',
			name: 'aditya',
			timestamp: '1234',
			received: true,
		})
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		.expect(201)
		.end((err, res) => {
			if (err) {
				throw err;
			}
			console.log(res.body);
		});
});

// get all messages
test('should return all messages', () => {
	request(app)
		.get('/v1/api/messages/sync')
		.expect('Content-Type', /json/)
		.expect(200)
		.end((err, res) => {
			if (err) {
				throw err;
			}
		});
});
