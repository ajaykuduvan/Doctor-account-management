const mongoose = require('mongoose');

const doctorPatientSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
});

module.exports = mongoose.model('DoctorPatient', doctorPatientSchema);
