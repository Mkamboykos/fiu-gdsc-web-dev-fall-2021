const express = require('express');
const router = express.Router();

router.post('/basicInfo', async (req, res) =>{
  const newUser = new User({
        email:    req.body.email,
		username: req.body.username,
		password: req.body.password,
        Gender:  req.body.Gender,
        Age:      req.body.Age,
        City:     req.body.City,
        State:    req.body.State
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

module.exports = router;