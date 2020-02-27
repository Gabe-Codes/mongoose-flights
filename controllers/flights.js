const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
	index,
	new: newFlight,
	create,
	show,
	destinations
};

function index(req, res, next) {
	const time = req.time;
	Flight.find({})
		.sort('-departs')
		.exec((err, flights) => {
			if (err) return next(err);
			res.render('flights/index', { flights, time });
		});
}

function newFlight(req, res) {
	const newFlightMem = new Flight();
	const dt = newFlightMem.departs;
	const destDate = `${dt.getFullYear()}-${dt.getMonth() +
		1}-${dt.getDate()}T${dt
		.getHours()
		.toString()
		.padStart(2, '0')}:${dt
		.getMinutes()
		.toString()
		.padStart(2, '0')}`;
	res.render('flights/new', { destDate });
}

function create(req, res) {
	const flight = new Flight(req.body);
	flight.save(err => {
		if (err) return res.redirect('flights/new');
		res.redirect('/flights');
	});
}

function show(req, res) {
	Flight.findById(req.params.id, (err, flight) => {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', { title: 'Flight Details', flight, tickets });
		});
	});
}

function destinations(req, res) {}
