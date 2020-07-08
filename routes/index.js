const express= require('express');
const indexController = require('../controllers/index');
const authSuccess= require('../middlewares/studentAuth/studentAuthSuccess');

const router= express.Router();


router.get('/',indexController.getIndex);

module.exports = router;