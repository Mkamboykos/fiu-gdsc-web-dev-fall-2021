const express = require ( 'express' );
const router = express.Router ();
const User = require ('../Models/Users');
const bcrypt = require('bcrypt');



router.post('/User', async (req, res) =>{ 

	// Input from Home page in client
    const {username, password} = req.body;

	// Check if user exists in the database
	const userExist = await User.findOne({where: {username: username}});

	if(userExist){

		// compare the password field being passed and the current password of userExist
		await bcrypt.compare(password, userExist.password).then((match) =>{
            if(!match){
                res.status(422).json({error:'Wrong username or password combination!'})
            }else if(match){
				res.status(200).json({message: "success"})
			}
		}).catch(e =>{
            console.log(e)
        });
	}

	if(!userExist){
        res.status(422).send({error:'Wrong usernames or password combination!'})
    }
});

module.exports = router;