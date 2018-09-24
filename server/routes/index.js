// replace resource with resource name (singular);
// double-check capitalization

const resourceRouter = require('./resource.routes');
const router = require('express').Router();

module.exports = router.use('/resources', resourceRouter);
