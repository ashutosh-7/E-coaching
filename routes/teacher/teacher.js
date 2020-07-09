const express= require('express');
const teacherController = require('../../controllers/teacher/teacher');
const router= express.Router();
const authSuccess= require('../../middlewares/studentAuth/studentAuthSuccess');


router.get('/approval',teacherController.getApproval);
router.post('/approval',teacherController.postApproval);

router.get('/test',teacherController.getTest);
router.get('/test2',authSuccess,teacherController.getTest2);
router.post('/test',teacherController.postTest);

module.exports = router;