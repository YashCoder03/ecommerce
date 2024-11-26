const { Router } = require("express")
const {createUser,loginUser,forgotPassword} = require('../Controller/user.controller')
const router = Router()

router.post('/register',createUser);
router.post('/login',loginUser);

module.exports = router