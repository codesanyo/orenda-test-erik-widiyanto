var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
//   res.status(200).render('index', "");
  res.status(200).json({ error: 'message' });
});

module.exports = router;
