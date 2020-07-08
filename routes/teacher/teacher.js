const express= require('express');
const teacherController = require('../../controllers/teacher/teacher');
const router= express.Router();


router.get('/approval',teacherController.getApproval);
router.post('/approval',teacherController.postApproval);



module.exports = router;