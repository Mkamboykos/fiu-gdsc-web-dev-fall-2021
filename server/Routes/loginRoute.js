const express = require ( 'express' );
const router = express.Router ();
const login = require ('../Models/loginModels');

//Create user and password
router.post ('./User', async (req, res) => {
    const data = req.body;

    login.insertMany (data)
    .then (data => { res.send(data); })
    .catch (err => { res.status(500).send( { message: err.message }); })
});

module.exports = router;