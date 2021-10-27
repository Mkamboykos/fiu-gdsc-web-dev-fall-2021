const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email']
	},
	username: {
		type: String,
		required: [true, 'User']
	},
	password: {
		type: String,
		required: [true, 'Password']
	},
	Gender: {
		type: String,
		required: [true, 'Gender']
	},
	Age: {
		type: Number,
		required: [true, 'Age']
	},
	City: {
		type: String,
		required: [true, 'City']
	},
	State: {
		type: String,
		required: [true, 'City']
	}
})

module.exports = mongoose.model("Users", UsersSchema);