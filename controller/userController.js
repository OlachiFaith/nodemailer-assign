const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const sendMail = require('../utils/nodemailer')

exports.register = async(req, res) => {
    try {
        const OTP = Math.floor(Math.random() * 1E4)
        const {fullName, address, email, phoneNumber, password, confirmPassword} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedConfirmPass = await bcrypt.hash(confirmPassword, salt);

        const user = await userModel.create({
            fullName, 
            address, 
            email, 
            phoneNumber, 
            password: hashedPassword, 
            confirmPassword: hashedConfirmPass
        });

        console.log(OTP);
        

        const emailOptions = {
            email: user.email,
            subject: 'Welcome to The Girly Zone',
            html: `<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body style="width:100%;height:100vh;background-color: lightblue;display: flex;align-items: center;justify-content: center;">
<div style="background-color: white; padding: 20px; border-radius: 10px; width: 400px; margin: auto; text-align: center;">
<h1>Welcome ${user.fullName}</h1>
<p>Your one-time verification code: </p>
<h1>${OTP}</h1>
<p>This code expires after 5 minutes. If you did not request this, please change your password or contact customer Support.</p>
</div>
</body>
</html>`
        }
        console.log("1");
        
        const mail = await sendMail(emailOptions);
        console.log("2");
        console.log(mail);
        console.log("3");
        

        res.status(201).json({
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}