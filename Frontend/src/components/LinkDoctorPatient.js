import React, { useState } from 'react';
import axios from 'axios';

const LinkDoctorPatient = () => {
    const [form, setForm] = useState({ doctorId: '', patientId: '' });

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/link', form);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="doctorId" value={form.doctorId} onChange={handleChange} placeholder="Doctor ID" />
                <input type="text" name="patientId" value={form.patientId} onChange={handleChange} placeholder="Patient ID" />
                <button type="submit">Link Doctor and Patient</button>
            </form>
        </div>
    );
};

export default LinkDoctorPatient;
