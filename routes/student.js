const express= require('express');
const studentController = require('../controllers/student');
const auth= require('../middlewares/is-auth');
const router= express.Router();


router.get('/home',auth,studentController.getHome);

module.exports = router;