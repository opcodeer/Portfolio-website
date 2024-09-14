const express = require('express');
const {getmessage} = require('../controllers/user.js');

const router = express.Router();
// router.post('/signin',signin);
router.post('/getmessage',getmessage);
module.exports = router;
