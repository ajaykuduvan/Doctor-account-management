import React from 'react';
import SignUpLogin from './components/SignUpLogin';
import PDFUpload from './components/PDFUpload';
import LinkDoctorPatient from './components/LinkDoctorPatient';

const App = () => {
    return (
        <div>
            <SignUpLogin />
            <PDFUpload />
            <LinkDoctorPatient />
        </div>
    );
};

export default App;
