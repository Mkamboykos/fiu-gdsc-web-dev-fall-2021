const express = require('express');
const forget = require('../Models/Users');
const nodemailer = require ('nodemailer'); 
const router = express.Router();

router.post ('/Email', async (req, res) => {
    const {email} = req.body;
    const checkEmail = await forget.findOne ({ where: { email:email }});

    if (checkEmail && email === checkEmail.email)
    {
        const num = Math.floor( Math.random() * 10000 );    //Random code of 4 whole digits

        //Reusable transporter object
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: 'francesca.ruecker48@ethereal.email',
                pass: 'SJ5Znv1nyqqYu3mumX',
            },
        });

        //Mail sent using transporter object
        let info = await transporter.sendMail({
            from: '"The Express App" <theExpressApp@example.com>', // sender address
            to: "test1@gmail.com", // list of receivers
            subject: "Hello", // Subject line
            text: "This is your code: " + num, 
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.json (num);
    }
    else
    {
        res.status(400).send({error:'Email could not be found'});
    }
});

module.exports = router;