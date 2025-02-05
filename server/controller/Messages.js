const Message = require('../models/Messages');
exports.SendMessage = (req, res) => {
	// getting the data from the request body
	const messData = req.body;

	// stroing the recived data into the collection's
	Message.create(messData, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
};

exports.GetData = (req, res) => {
	Message.find({}).exec((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
};
