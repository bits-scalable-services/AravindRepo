const express = require('express');
const router = express.Router();

const userRoute = require('../microservices/user/routes/user.route');

router.use('/user', userRoute);

module.exports = router;