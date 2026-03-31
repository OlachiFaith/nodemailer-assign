const { register, verifyEmail, resendOTP, login } = require('../controller/userController');

const router = require('express').Router();

router.post('/register', register);

router.post('/verify', verifyEmail);

router.post('/resend-otp', resendOTP);

router.post('/login', login)

module.exports = router