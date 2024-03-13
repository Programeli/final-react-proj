import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header():JSX.Element{

    return(

        <div className='header-wrapper'>

           <div className='nav'>

                <Link to={'/home'} className='link'>Home</Link>
                <Link to={'/about'} className='link'>About Us</Link>
                <Link to={'/contact'} className='link'>Contact</Link>
                <Link to={'/shop'} className='link'>Shop</Link>

           </div>
           
           <div className='logo'>

                <h3>Logo</h3>

           </div>


            <div className='loginregister'>

                <Link to={'/login'} className='link'>Login</Link>
                <Link to={'/register'} className='link'>Register</Link>

            </div>

        </div>

    );


}