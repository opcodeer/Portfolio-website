const express = require('express');
const {getmessage} = require('../controllers/user');

const router = express.Router();
// router.post('/signin',signin);
router.post('/getmessage',getmessage);
module.exports = router;
