const router = require('express').Router();

const destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;