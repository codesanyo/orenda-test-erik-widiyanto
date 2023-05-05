var express = require('express');
var router = express.Router();
const getModule = require('../Module/function')
const runQuery = require('../Module/query')
const env = require('dotenv').config();
const db = require('../config/connection')

router.put('/update/:id', async (req, res) => {
  var [id, name, unit, price] = [req.params.id, req.body.name, req.body.unit, req.body.price]
  var _dbid = await db.sequelize.query(
    runQuery.getAllIdFromTable(
      "product",
      ),{
        type: db.QueryTypes.SELECT
    }
  );
  const result = _dbid.find((item) => item.id == id);
  var message = await getModule.isIdAlreadyExist(result, id, name, unit, price)
  res.status(message.statuscode).json(message);
});

router.post('/create', async (req, res) => {
  var [id, name, unit, price] = [req.body.id, req.body.name, req.body.unit, req.body.price]
  var message
  var data = await db.sequelize.query(
    runQuery.getAllIdFromTable(
      "product"
      ),{
        type: db.QueryTypes.SELECT
    }
  );
  var result = data.find((item) => item.id == id);
  console.log(result)
  var message = await getModule.isSuccess(result, id, name, unit, price)
  
  res.status(message.statuscode).json(message);
});

module.exports = router;
