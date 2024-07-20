const DoctorPatient = require('../models/DoctorPatient');

exports.linkDoctorPatient = async (req, res) => {
    const { doctorId, patientId } = req.body;

    try {
        const link = new DoctorPatient({
            doctor: doctorId,
            patient: patientId
        });

        await link.save();
        res.json(link);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
