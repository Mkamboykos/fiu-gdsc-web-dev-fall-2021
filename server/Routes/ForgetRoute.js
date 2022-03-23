const express = require('express');
const forget = require('../Models/Users');
const nodemailer = require ('nodemailer'); 
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require ('../Models/Users');

router.put(`/reset`, async (req, res, next) => {

    // obtain body passed
    const {email, resetPassword, confirmPassword} = req.body;

    // validate the passwords
    let pass = false
    
    if (resetPassword !== confirmPassword){
        res.status("422").json({error:'Passwords do not match!'});
    }

    // if validation passed make pass true
    if (resetPassword === confirmPassword){
        pass = true
    }
    
    if (pass === true){

        // encrypt submitted password
        const hashedPassword = await bcrypt.hash(confirmPassword, 10);

        // find one user with the email provided
        await User.findOne({email: email})
        .then(user => {
            console.log(resetPassword)
            console.log(hashedPassword)
            //if user with that email does not exist
            if(!user){
                res.status("422").json({error:'No record found'});
            }else if(user){

                let values = {
                    password: hashedPassword
                }

                user.updateOne(values).then( updatedRecord => {
                    if(!updatedRecord){
                        res.status("422").json({error:'Could not update password'});
                    }else{
                        console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
                        // login into your DB and confirm update
                        res.status(200).json({code: 200})
                    }
                    
                }).catch(err =>{
                    console.log(err)
                })
            }
        }).catch(e =>{
			console.log(e)
		});
        
    }

    
    

    // if(!userEmail){
    //     res.status("422").json({error:'Wrong Username or Password combination!'});
    // }
// res.status("422").json({error:'Wrong Username or Password combination!'});
})


router.post ('/email', async (req, res, next) => {
    const {email} = req.body;
    const checkEmail = await forget.findOne ({ email:email });

    if (checkEmail){
        try {
            //Reusable transporter object
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,    //Unique user found in env
                    pass: process.env.MAIL_PASS,    //Unique password found in env
                },
            });

            //Verify that the transporter connection is established
            transporter.verify(function(error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Server is ready to take our messages');
                }
            });

            var num = Math.floor(1000 + Math.random() * 9000);    //Random code of 4 whole digits
            code = num;                             //Pass num into 'code: code'
            console.log(code)          

            //Create message that will be sent to user email
            const msg = {
                from: `"GDSC Team" <${process.env.MAIL_FROM}>`, // sender address
                to: email, // list of receivers
                subject: "Hello",
                text: "This is your code: " + code,
                html: `<b>Hey there!</b> <br/>Here is your code ${code}`, 
            }

            const info = await transporter.sendMail(msg);       //Verify that message gets sent

            console.log("Message sent: %s", info.messageId);    //Display mail Id
            //console.log ("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            res.json ({code: code});
            next()
        }
        catch (err){
            console.log (err);
        }
    }
    else
    {
        res.status(400).send({error:'Email could not be found'});
    }
});

module.exports = router;