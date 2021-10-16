const express = require('express');
const router = express.Router();
const {Users} = require("../Models/Users");
const bcrypt = require('bcrypt');
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

router.post('/Auth/Login', async (request, response) =>{
    // Define User Object from Models
    const {username, password} = request.body;
    //Validate User Schema Username and Password
    const user = await Users.findOne({username:username})
    const user_pass = await Users.findOne({password:password})
    //Define salts for password and hashed password
    
    const password_salt = await bcrypt.genSalt(10)
    const hashed_password = await bcrypt.hashPassword(password, password_salt)
    
    try{
        if(user && hashed_password == user_pass) {
        response.status(200).send(response.json())
        }
    } 
        catch(error){
            response.status(422).send("Wrong username or password combination failed")
        }
    
    
    
    });