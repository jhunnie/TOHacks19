var express = require('express');
var router = express.Router();

const locationController = require('../controller/location.controller');

router.get('/test', locationController.test);
router.post('/add_user', locationController.add_user);
router.post('/return_image_tag', locationController.return_image_tag);
router.post('/get_charities', locationController.get_charities);

module.exports = router;
