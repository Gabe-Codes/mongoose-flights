const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mongoose-flights', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

db.on('connected', () => {
	console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
