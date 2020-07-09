const express= require('express');
const studentController = require('../../controllers/student/student');
const router= express.Router();
const isAuth= require('../../middlewares/studentAuth/isAuth');

router.get('/home',isAuth,studentController.getHome);



module.exports = router;