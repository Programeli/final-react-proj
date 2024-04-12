import React, { useState, useEffect } from "react";
import axios from "axios";
import './login.css';

export default function Login(): JSX.Element {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    axios.defaults.withCredentials = true; // Added this line to enable cookies!!!!!

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('http://localhost:3001/log-in', formData);

            // Handle the response from the server
            console.log(response.data);
            alert('Login successful!');
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "/";
        } catch (error) {
            // Handle errors
            console.error('Error during login:', error);
            setError('Invalid username or password. Please try again.');
        }
    };

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            // Redirect to home page if already logged in
            window.location.href = "/";
        }
    }, []);

    return(
        <div className="login-wrapper">
            <div className="login-logo"></div>
            <div className="login-content">
                <h1>Login to access our store!</h1>
                <div className="form-wrapper">
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" name="username" id="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                        <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                        <button type="submit" name="submit" id="submit">Login</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                    <a className="forgot-pass" href="/log-in">Forgot Password?</a>
                    <p className="register-text">Not a member yet?<a className="register-link" href="/register"> Register here!</a></p>
                </div>
            </div>
        </div>
    );
}
