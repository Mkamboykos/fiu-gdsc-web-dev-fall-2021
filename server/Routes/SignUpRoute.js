const express = require('express');
const router = express.Router();
const User = require('../Models/Users');
const bcrypt = require('bcrypt');

router.post('/basicInfo', async (req, res, next) =>{
	const {email, username, password, gender, city, state} = req.body;

	const hashedPassword = await bcrypt.hash(password, 10);

	try{
		const newUser = await User.create({
			email:     email,
			username:  username,
			password:  hashedPassword,
			gender:    gender,
			city:      city,
			state:     state
		})
	} catch (error){
		console.log(error)
		return res.json({status: 422})
	}
});

module.exports = router;