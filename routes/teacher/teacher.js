const express= require('express');
const teacherController = require('../../controllers/teacher/teacher');
const router= express.Router();
const isAuth = require('../../middlewares/teacherAuth/teacherAuth');

console.log("In the teacher routes");

router.get('/teacher/approval',teacherController.getApproval);
router.post('/teacher/approval',teacherController.postApproval);

router.get('/teacher/home',isAuth,teacherController.getHome);


// router.get('/test',teacherController.getTest);
// router.get('/test2',authSuccess,teacherController.getTest2);
// router.post('/test',teacherController.postTest);

module.exports = router;