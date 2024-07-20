const express = require('express');
const { uploadPDF } = require('../controllers/pdfController');

const router = express.Router();

router.post('/upload', uploadPDF);

module.exports = router;
