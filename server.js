const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations')
const ticketsRouter = require('./routes/tickets')
const port = 3000;

require('./config/database');

const app = express();


// app.get('/', (req, res) => res.send('works'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    req.time = new Date().toLocaleString();
    next();
});

app.use('/', indexRouter);
app.use('/flights', flightsRouter)
app.use('/', destinationsRouter)
app.use('/', ticketsRouter)

app.listen(port)

module.exports = app;