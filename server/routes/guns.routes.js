// replace resource with resource name (singular);
// double-check capitalization

const { resourceController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', resourceController.index)
  .post('/', resourceController.create)
  .get('/:resourceID', resourceController.show)
  .put('/:resourceID', resourceController.update)
  .delete('/:resourceID', resourceController.destroy);
