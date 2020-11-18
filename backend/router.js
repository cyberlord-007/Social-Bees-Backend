const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('sever is running');
});

module.exports = router;
