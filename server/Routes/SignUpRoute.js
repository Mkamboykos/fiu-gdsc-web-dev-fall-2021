const express = require('express');
const router = express.Router();
const User = require('../Models/Users');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const ValidationException = require('../Exceptions/ValidationException');

router.post('/basicInfo',
// [
// 	body('email').trim().notEmpty().withMessage('Field cannot be empty!').bail().isEmail().withMessage('This is not a valid Email').bail().normalizeEmail().toLowerCase()
// ] ,
async (req, res, next) =>{
	const {dataObject} = req.body;

	// const errors = validationResult(req);
    // if (!errors.isEmpty()){
    //     return next(new ValidationException(errors.array()));
    // }
	const hashedPassword = await bcrypt.hash(dataObject.data.confirmPassword, 10);

	console.log(hashedPassword)
	try{
		const newUser = await User.create({
			personal: {
				fullName: dataObject.data.fullName,
				email: dataObject.data.email,
				username: dataObject.data.username,
				password: hashedPassword,
				gender: dataObject.data.gender,
				age: parseInt(dataObject.data.age, 10),
				height: dataObject.data.height,
				weight: dataObject.data.weight,
				activityLevel: dataObject.data.activityLevel,
				state: dataObject.data.state,
				city: dataObject.data.city
			},
			allergies: {
				peanuts: dataObject.peanuts,
				shellfish: dataObject.shellfish,
				nuts: dataObject.nuts,
				wheat: dataObject.wheat,
				eggs: dataObject.eggs,
				dairy: dataObject.dairy,
				fish: dataObject.fish,
				soy: dataObject.soy,
				lactoseIntolerant: dataObject.lactoseIntolerant,
				vegetarian: dataObject.vegetarian,
				glutenFree: dataObject.glutenFree,
				vegan: dataObject.vegan,
				diabetic: dataObject.diabetic
			},
			dislike: {
				spicy: dataObject.spicy,
				pastry: dataObject.pastry,
				vegetables: dataObject.vegetables,
				citrus: dataObject.citrus,
				caffeine: dataObject.caffeine,
				seafood: dataObject.seafood,
				friedfoods: dataObject.friedfoods,
				carbonated: dataObject.carbonated,
				alcohol: dataObject.alcohol,
				highsodium: dataObject.highsodium
			},
			goals: {
				weightLoss: dataObject.weightLoss,
				maintaingWeight: dataObject.maintaingWeight,
				massGaining: dataObject.massGaining,
				fasting: dataObject.fasting
			}
		})
		res.json("User Successfully Created")
	} catch (error){
		console.log(error)
		return res.json({status: 422})
	}
});

module.exports = router;