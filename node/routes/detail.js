const express = require('express');

const router = express.Router();

const detailsController = require('../controllers/detail');

const checkAuth = require('../auth/checkAuth');

router.post('/',checkAuth, detailsController.details);

module.exports = router;