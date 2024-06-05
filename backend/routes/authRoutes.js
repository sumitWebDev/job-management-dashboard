const express = require('express');
const router = express.Router();
const {job} = require('../controllers/controller');

//auth routes
router.get('/',job)

module.exports = router;