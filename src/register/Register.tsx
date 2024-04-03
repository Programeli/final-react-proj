import React from "react";
import './Register.css';

export default function Register():JSX.Element {

    return(

        <div className="register-wrapper">

            <div className="register-logo"></div>

            <div className="register-content">

                <h1>Become a member!</h1>

                <div className="form-wrapper">

                    <form action="" method="POST">

                        <div>
                            <input type="text" name="firstname" id="firstname" placeholder="First Name"/>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
                        </div>

                        <div>
                            <input type="text" name="username" id="username" placeholder="Username"/>
                            <input type="email" name="email" id="email" placeholder="E-mail"/>
                        </div>

                        <div>
                            <input type="password" name="password" id="username" placeholder="Password"/>
                            <input type="password" name="verify-password" id="verify-password" placeholder="Verify Password" />
                        </div>

                        <button type="submit" name="submit" id="submit">Register</button>

                    </form>

                    <p className="login-text">Already a member?<a className="login-link" href="/log-in"> Log in here!</a></p>

                </div>

            </div>

        </div>

    );

}