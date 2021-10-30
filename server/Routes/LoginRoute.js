const express = require('express');
const router = express.Router();
const User = require("../Models/Users");

router.post('/User', async (req, res) =>{ 

	// Input from Home page in client
    const {username, password} = req.body;

	// Check if user exists in the database
	const userExist = await User.findOne({where: {username: username}});

	if(userExist){
		// encrypt password given

		//check if encrypted password matches the password in the database
	}
});

module.exports = router;