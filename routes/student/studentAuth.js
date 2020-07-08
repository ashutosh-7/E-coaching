const express= require('express');
const router= express.Router();
const authController = require('../../controllers/student/studentAuth');
const authSuccess= require('../../middlewares/studentAuth/studentAuthSuccess');

router.get('/login',authSuccess,authController.getLogin);
router.post('/login',authSuccess,authController.postLogin);
router.get('/register',authSuccess,authController.getRegister);
router.post('/register',authSuccess,authController.postRegister);
router.post('/logout',authController.postLogout);



module.exports = router;