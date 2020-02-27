const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
	airport: {
		type: String,
		enum: ['AUS', 'DAL', 'LAX', 'SAN', 'DEN']
	},
	arrival: {
		type: Date,
		required: true
	}
});

const flightSchema = new Schema({
	airline: {
		type: String,
		enum: ['American', 'Southwest', 'United']
	},
	flightNo: {
		type: Number,
		required: true,
		max: 9999,
		min: 10
	},
	departs: {
		type: Date,
		default: () => {
			const date = new Date();
			const year = date.getFullYear() + 1;
			const newDate = date.setFullYear(year);
			return newDate;
		}
	},
	airport: {
		type: String,
		enum: ['AUS', 'DAL', 'LAX', 'SAN', 'DEN'],
		default: 'SAN'
	},
	destinations: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);
