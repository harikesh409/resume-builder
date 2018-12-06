const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const mongoose = require('mongoose');
const connection = mongoose.connection;
mongoose.connect("mongodb+srv://" + process.env.MONGO_ATLAS_USERNAME + ":" + process.env.MONGO_ATLAS_PASSWORD + "@resumecreator-gwur0.mongodb.net/test?retryWrites=true", {
	useNewUrlParser: true
});

connection.once('open', () => {
	console.log(`MongoDB connected.`);
});

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
		return res.status(200).json({});
	}
	next();
});

const userRoutes = require('./routes/user');
const detailsRoutes = require('./routes/detail');

app.use('/user', userRoutes);
app.use('/details', detailsRoutes);

app.use((req, res, next) => {
	const error = new Error('Invalid Request');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: error.message
	});
});

module.exports = app;