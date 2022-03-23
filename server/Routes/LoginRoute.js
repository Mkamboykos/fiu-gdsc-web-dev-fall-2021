const express = require ( 'express' );
const router = express.Router ();
const User = require ('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticateToken} = require('../middlewares/verifyTokenMiddleware');

function tokensFunction(res, user){
    // create accessToken and refreshToken with user
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

    // create access cookie with accessToken, expires in 15 seconds
    res.cookie("access", accessToken, {
        maxAge: 5000, // 5 seconds
        httpOnly: true,
    })

    // create refresh cookie with refreshToken, expires in 24 hours
    res.cookie("refresh", refreshToken, {
        maxAge: 86400000, // 24 hours
        httpOnly: true,
    })

    res.json({auth: true});
}


router.get('/User', authenticateToken, (req, res) => {
    if('Authorized'){
        if(req.user.name){
            return res.json({
                LoggedIn: true, 
                username: req.user.name,
                id: req.user.id,
            })
        }else{
            return res.json({
                LoggedIn: true, 
                username: req.user.verifiedRefresh.name,
                id: req.user.verifiedRefresh.id,
            })
        }
    }else{
        return res.json({
            LoggedIn: false
        })
    }
});

router.post('/User', async (req, res) =>{ 

	// Input from Home page in client
    const {username, password} = req.body;

	// Check if user exists in the database
	const userExist = await User.findOne({username: username});

	if(!userExist){
		res.status("422").json({error:'Wrong Username or Password combination!'});
	}else{
		// compare the password field being passed and the current password of userExist
		await bcrypt.compare(password, userExist.password).then((match) =>{
			if(!match){
				res.status(422).json({error:'Wrong Username or Password combination!'})
			}else{
				const user = {id: userExist._id, name: userExist.username};
				tokensFunction(res, user);
			}
		}).catch(e =>{
			console.log(e)
		});
	}

});

module.exports = router;