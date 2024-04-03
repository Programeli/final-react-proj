import React from "react";
import './login.css';

export default function Login():JSX.Element {

    return(

        <div className="login-wrapper">

            <div className="login-logo"></div>

            <div className="login-content">

                <h1>Login to access our store!</h1>

                <div className="form-wrapper">

                    <form action="" method="POST">

                        <input type="text" name="username" id="username" placeholder="Username"/>
                        <input type="password" name="password" id="password" placeholder="Password" />

                        <button type="submit" name="submit" id="submit">Login</button>

                    </form>

                    <a className="forgot-pass" href="/log-in">Forgot Password?</a> {/* NOT FUNCTIONAL! JUST FOR LOOKS */}
                    <p className="register-text">Not a member yet?<a className="register-link" href="/register"> Register here!</a></p>

                </div>

            </div>

        </div>

    );

}