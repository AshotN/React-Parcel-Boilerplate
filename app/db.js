import mongoose from 'mongoose'

const models = require('./models');
const config = require('./config');
const options ={
	useNewUrlParser: true,
	autoIndex: false
};

function connect() {
	mongoose.connect(config.mongo.url, options);
}

connect();

mongoose.connection.once('connected', () => {
	return console.log('connected to mongo');
});

mongoose.connection.on('error', () => {
	console.log("Failed to connect");
	mongoose.disconnect();
});

mongoose.connection.on('disconnected', () => {
	setTimeout(() => connect(), 1000);

});


module.exports = models;