var express = require('express');
var router = express.Router();
const getModule = require('../Module/function')
const env = require('dotenv').config();

router.post('/', async (req, res) => {
    var message = getModule.defaultResponse(
        process.env.ERROR_CUSTOMER_SUCCESS,
        false,
        201
        )
  res.status(message.statuscode).json(message);
});

module.exports = router;
