const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, 'User']
	}
		,
	password: String
})

module.exports = mongoose.model("Users", UsersSchema);