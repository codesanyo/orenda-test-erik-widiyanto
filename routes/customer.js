var express = require('express');
var router = express.Router();
const getModule = require('../Module/function')
const runQuery = require('../Module/query')
const env = require('dotenv').config();
const db = require('../config/connection')

router.post('/', async (req, res) => {
  var [name, email, phone, address] = [req.body.name, req.body.email, req.body.phone, req.body.address]
  var message
  const data = await db.sequelize.query(
    runQuery.getDataFromTableCustomer(email, phone),{
        type: db.QueryTypes.SELECT
    } 
  );
  var message = getModule.isSuccessGetData(data)
  res.status(message.statuscode).json(message);
});

module.exports = router;
