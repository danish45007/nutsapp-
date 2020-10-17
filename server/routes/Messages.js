const express = require('express');
const { SendMessage } = require('../controller/Messages');
const router = express.Router();


router.post('/messages/new',SendMessage)
module.exports = router;