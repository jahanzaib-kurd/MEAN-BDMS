const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required:true
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isActive: {
		type: Boolean
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

//get all users
module.exports.getUsers = function (callback) {
	User.find({ isDeleted: { $ne: true } }, callback);
}

//get single user by id
module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

//get single user by username
module.exports.getUserByUsername = function (username, callback) {
	const query = { username: username };
	User.findOne(query, callback);
}

//add new user
module.exports.addUser = function (newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		if (err)
			console.log(err);
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err)
				console.log(err);
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

//update-edit existing user including soft delete
module.exports.updateUser = function (user, callback) {
	let query = { _id: user.id }
	User.update(query, user, callback);
}

module.exports.comparePassword = function (candidatePassowrd, hash, callback) {
	bcrypt.compare(candidatePassowrd, hash, (err, isMatch) => {
		if (err) {
			console.log(err);
		}
		callback(null, isMatch);
	});
}