const mongoose = require("mongoose")

const schema = mongoose.Schema("Post",{
	title: String,
	content: String,
})

module.exports = mongoose.model("Post", schema)