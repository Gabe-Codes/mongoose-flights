const Ticket = require('../models/ticket');

module.exports = {
	new: newTicket,
	create
};

function newTicket(req, res) {
	res.render('tickets/new', { flightId: req.params.id });
}

function create(req, res) {
	const ticket = { ...req.body, flight: req.params.id };
	Ticket.create(ticket, () => {
		res.redirect(`/flights/${req.params.id}`);
	});
}
