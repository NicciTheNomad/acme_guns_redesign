const { gunController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', gunController.index)
  // .post('/', gunController.create)
  .get('/:gunID', gunController.show);
// .put('/:gunID', gunController.update)
// .delete('/:gunID', gunController.destroy);
