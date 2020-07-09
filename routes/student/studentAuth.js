const express= require('express');
const router= express.Router();
const authController = require('../../controllers/student/studentAuth');
const isAuth= require('../../middlewares/studentAuth/isAuth');
const isCheck= require('../../middlewares/studentAuth/isCheck');

router.get('/login',isCheck,authController.getLogin);
router.post('/login',isCheck,authController.postLogin);
router.get('/register',isCheck,authController.getRegister);
router.post('/register',isCheck,authController.postRegister);
router.post('/logout',isAuth,authController.postLogout);



module.exports = router;