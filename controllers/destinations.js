const Flight = require('../models/flight');

module.exports = {
	create
};

function create(req, res) {
	Flight.findById(req.params.id, (err, flight) => {
        flight.destinations.push(req.body);
		flight.save(err => {
            if (err) return res.redirect(`/flights/${req.params.id}`);
            res.redirect(`/flights/${req.params.id}`);
		});
    });
}
