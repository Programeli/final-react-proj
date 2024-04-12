import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header({ isLoggedIn }: { isLoggedIn: boolean }):JSX.Element{

    return(

        <div className='header-wrapper'>

           <div className='nav'>
                
                <Link to={'/home'} className='link'>Home</Link>
                <Link to={'/about'} className='link'>About Us</Link>
                <Link to={'/contact'} className='link'>Contact</Link>
                <Link to={'/shop'} className='link'>Shop</Link>

           </div>
           
           <div className='logo'>

                <img className='logo-img' src="/assets/caffe-logo-ico.ico" alt="logo" />

           </div>


            <div className='loginregister'>

                {isLoggedIn ? (
                    <>
                        <Link to={'/profile'} className='link'>Profile</Link>
                        <Link to={'/logout'} className='link'>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to={'/log-in'} className='link'>Login</Link>
                        <Link to={'/register'} className='link'>Register</Link>
                    </>
                )}
            </div>

        </div>

    );


}