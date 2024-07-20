import React, { useState } from 'react';
import axios from 'axios';

const SignUpLogin = () => {
    const [form, setForm] = useState({ email: '', password: '', name: '' });
    const [isLogin, setIsLogin] = useState(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const url = isLogin ? '/api/auth/login' : '/api/auth/register';
        try {
            const res = await axios.post(url, form);
            console.log(res.data);
            // Store token in localStorage or state
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {!isLogin && <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />}
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default SignUpLogin;
