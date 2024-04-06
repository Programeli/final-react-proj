import React, { useState } from "react";
import axios from "axios";
import './Register.css';

export default function Register():JSX.Element {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Make a POST request to your server's signup endpoint
      const response = await axios.post('http://localhost:3001/api/register', formData );
      // Handle the response from the server
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error during registration:', error);
    }
  };

    return(

        <div className="register-wrapper">

            <div className="register-logo"></div>

            <div className="register-content">

                <h1>Become a member!</h1>

                <div className="form-wrapper">

                    <form onSubmit={handleSubmit}>

                        <div>
                            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange}/>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange}/>
                        </div>

                        <div>
                            <input type="text" name="username" id="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                            <input type="email" name="email" id="email" placeholder="E-mail" value={formData.email} onChange={handleChange}/>
                        </div>

                        <div>
                            <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                            <input type="password" name="verifyPassword" id="verify-password" placeholder="Verify Password" />
                        </div>

                        <button type="submit" name="submit" id="submit">Register</button>

                    </form>

                    <p className="login-text">Already a member?<a className="login-link" href="/log-in"> Log in here!</a></p>

                </div>

            </div>

        </div>

    );

}