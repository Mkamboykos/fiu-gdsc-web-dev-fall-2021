const express = require('express');
const router = express.Router();
const User = require('../Models/Users');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const ValidationException = require('../Exceptions/ValidationException');

router.post('/basicInfo',[
	body('email').trim().notEmpty().withMessage('Field cannot be empty!').bail().isEmail().withMessage('This is not a valid Email').bail().normalizeEmail().toLowerCase()
] ,async (req, res, next) =>{
	const {email, username, password, gender, city, state} = req.body;

	const errors = validationResult(req);
    if (!errors.isEmpty()){
        return next(new ValidationException(errors.array()));
    }

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