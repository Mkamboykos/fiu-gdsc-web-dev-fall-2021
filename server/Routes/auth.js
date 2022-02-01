const express = require('express');
const router = express.Router();
const passport = require('passport');
const { route } = require('./LoginRoute');

const CLIENT_URL_DASHBOARD = "http://localhost:3000/Dashboard"
const CLIENT_URL_404 = "http://localhost:3000/404"
const CLIENT_URL_HOMEPAGE = "http://localhost:3000/"


route.get('/404',  (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
})

route.get('/success', (req, res) => {
    if (req.user){
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user,
            // cookies: req.cookies
        });
    }
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL_HOMEPAGE);
})

router.get('/google', passport.authenticate("google",  {scope: ["profile"]}));

router.get('/google/callback', passport.authenticate("google", {
    successRedirect: CLIENT_URL_DASHBOARD,
    failureRedirect: CLIENT_URL_404,
})




module.exports = router;