const express = require('express');
const router = express.Router();

const User = require('../controllers/user.controller');

router.route('/fetch').get(User.fetchUsers);

router.route('/create').post(User.userCreation);

module.exports = router;