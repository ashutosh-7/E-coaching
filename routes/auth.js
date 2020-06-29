const express= require('express');
const router= express.Router();
const authController = require('../controllers/auth');
const authSuccess= require('../middlewares/auth-success');

router.get('/login',authSuccess,authController.getLogin);
router.post('/login',authSuccess,authController.postLogin);
router.get('/register',authSuccess,authController.getRegister);
router.post('/register',authSuccess,authController.postRegister);
router.post('/logout',authController.postLogout);



module.exports = router;