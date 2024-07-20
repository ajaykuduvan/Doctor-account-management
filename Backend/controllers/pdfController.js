const PDF = require('../models/PDF');

exports.uploadPDF = async (req, res) => {
    const { doctorId, url } = req.body;

    try {
        const pdf = new PDF({
            doctor: doctorId,
            url
        });

        await pdf.save();
        res.json(pdf);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
