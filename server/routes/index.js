const gunRouter = require('./guns.routes');
const router = require('express').Router();

module.exports = router.use('/guns', gunRouter);
