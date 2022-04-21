const router = require('express').Router();

router.use('/restaurant', require('./restaurant'));

router.use((req, res, next) => {
  let error = new Error('Api route not found');
  error.status = 404;
  next(error);
});

module.exports = router;
