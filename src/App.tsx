import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import './App.css';

import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home.tsx';
import About from './about/about.tsx';
import Contact from './contact/Contact.tsx';
import Login from './log-in/login.tsx';
import Register from './register/Register.tsx';
import Shop from './shop/Shop.tsx';
import Profile from './profile/Profile.tsx';
import Logout from './logout/Logout.tsx';

function App(): JSX.Element {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }

    }, []);

  return (
    
    <BrowserRouter>
      <div className='App'>
      <Header isLoggedIn={isLoggedIn} />

        <Routes>  
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route> {/* CHANGE IT SO THAT THE IMAGES FADE IN ON SCROLL! */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/log-in" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
        
      <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
