const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
	personal:{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		gender: {
			type: String,
			required: true
		},
		age: {
			type: Number,
			required: true
		},
		height: {
			type: String,
			required: true
		},
		weight: {
			type: String,
			required: true
		},
		activityLevel: {
			type: String,
			required: true
		},
		state: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
	},
	allergies: {
		peanuts: {
			type: Boolean,
			required: true
		},
		shellfish: {
			type: Boolean,
			required: true
		},
		nuts: {
			type: Boolean,
			required: true
		},
		wheat: {
			type: Boolean,
			required: true
		},
		eggs: {
			type: Boolean,
			required: true
		},
		dairy: {
			type: Boolean,
			required: true
		},
		fish: {
			type: Boolean,
			required: true
		},
		soy: {
			type: Boolean,
			required: true
		},
		lactoseIntolerant: {
			type: Boolean,
			required: true
		},
		vegetarian: {
			type: Boolean,
			required: true
		},
		glutenFree: {
			type: Boolean,
			required: true
		},
		vegan: {
			type: Boolean,
			required: true
		},
		diabetic: {
			type: Boolean,
			required: true
		},
	},
	dislike: {
		spicy: {
			type: Boolean,
			required: true
		},
		pastry: {
			type: Boolean,
			required: true
		},
		vegetables: {
			type: Boolean,
			required: true
		},
		citrus: {
			type: Boolean,
			required: true
		},
		caffeine: {
			type: Boolean,
			required: true
		},
		seafood: {
			type: Boolean,
			required: true
		},
		friedfoods: {
			type: Boolean,
			required: true
		},
		carbonated: {
			type: Boolean,
			required: true
		},
		alcohol: {
			type: Boolean,
			required: true
		},
		highsodium: {
			type: Boolean,
			required: true
		},
	},
	goals: {
		weightLoss: {
			type: Boolean,
			required: true
		},
		maintaingWeight: {
			type: Boolean,
			required: true
		},
		massGaining: {
			type: Boolean,
			required: true
		},
		fasting: {
			type: Boolean,
			required: true
		},
	}

})

module.exports = mongoose.model("Users", UsersSchema);