import React, { useState } from 'react';
import axios from 'axios';

const PDFUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        // Assume 'doctorId' is obtained from the authenticated user's state
        formData.append('doctorId', 'someDoctorId');

        try {
            const res = await axios.post('/api/pdf/upload', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload PDF</button>
            </form>
        </div>
    );
};

export default PDFUpload;
