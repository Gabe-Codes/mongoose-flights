const router = require('express').Router();

const flightCtrl = require('../controllers/flights');

router.get('/', flightCtrl.index)
router.get('/new', flightCtrl.new)
router.get('/:id', flightCtrl.show)
router.post('/', flightCtrl.create)
router.post('/flights/:id/destinations', flightCtrl.destinations);

module.exports = router;