const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PDF', pdfSchema);
