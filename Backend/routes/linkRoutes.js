const express = require('express');
const { linkDoctorPatient } = require('../controllers/linkController');

const router = express.Router();

router.post('/link', linkDoctorPatient);

module.exports = router;
