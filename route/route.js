const express = require('express');
const router = express.Router();
const CONTROLLER = require('../controller/controller.js');

router.post('/parse', CONTROLLER.excel_formula_parser);

module.exports = router;