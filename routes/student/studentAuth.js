const express= require('express');
const router= express.Router();
const authController = require('../../controllers/student/studentAuth');
const authSuccess= require('../../middlewares/studentAuth/studentAuthSuccess');

router.get('/login',authController.getLogin);
router.post('/login',authController.postLogin);
router.get('/register',authController.getRegister);
router.post('/register',authController.postRegister);
router.post('/logout',authSuccess,authController.postLogout);



module.exports = router;