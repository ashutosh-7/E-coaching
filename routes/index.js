const express= require('express');
const indexController = require('../controllers/index');
const authSuccess= require('../middlewares/studentAuth/isAuth');

const router= express.Router();


router.get('/',indexController.getIndex);

module.exports = router;