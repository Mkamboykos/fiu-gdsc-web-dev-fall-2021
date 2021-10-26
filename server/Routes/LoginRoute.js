const express = require('express');
const router = express.Router();
const User = require("../Models/Users");

router.post('/UserLogin', async (req, res) =>{ 
	const newUser = new User({
		username: req.body.username,
		password: req.body.password
	});

	newUser
		.save()
		.then(result => {
			console.log(result);
		})
		.catch(err => {
			console.log(err);
		});
});


router.get('/checkIfExistUser', async (req, res) =>{ 
	const {username, password} = req.body;

	const checkUser = await User.find({username:username});
	const checkPassword = await User.find({password:password})

	try {
		// res.send(checkUser, checkPassword).body;
		res.status(200).send(checkUser +  checkPassword)
	  } catch (error) {
		response.status(500).send(error);
	  }
});

module.exports = router;