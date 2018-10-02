const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  response.sendFile(
    path.join(__dirname, '../../dist/gunshop-redesign/index.html')
  );
});

module.exports = router;
