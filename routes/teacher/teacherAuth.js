const express= require('express');
const router= express.Router();
const authController = require('../../controllers/teacher/teacherAuth');
const isCheck= require('../../middlewares/teacherAuth/isCheck');
const isAuth = require('../../middlewares/teacherAuth/teacherAuth');

router.get('/teacher/login',isCheck,authController.getLogin);
router.post('/teacher/login',isCheck,authController.postLogin);
router.get('/teacher/register',isCheck,authController.getRegister);
router.post('/teacher/register',isCheck,authController.postRegister);
router.post('/teacher/logout',isAuth,authController.postLogout);



module.exports = router;