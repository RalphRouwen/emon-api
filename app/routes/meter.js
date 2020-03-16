const express = require('express');
const router = express.Router();

const meterController = require('../api/controllers/meter');

// router.get('/:metingId', meterController.getById);
router.get('/latest', meterController.getLatest);
router.get('/get', meterController.getParam);

module.exports = router;
