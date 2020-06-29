const express= require('express');
const indexController = require('../controllers/index');
const auth = require('../middlewares/is-auth');

const router= express.Router();


router.get('/',indexController.getIndex);

module.exports = router;