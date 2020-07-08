const express= require('express');
const studentController = require('../../controllers/student/student');
const router= express.Router();
const authSuccess= require('../../middlewares/studentAuth/studentAuthSuccess');

router.get('/home',authSuccess,studentController.getHome);



module.exports = router;