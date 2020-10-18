const express = require('express');
const { SendMessage, GetData } = require('../controller/Messages');
const router = express.Router();

router.post('/messages/new', SendMessage)
router.get('/messages/sync', GetData)

module.exports = router;