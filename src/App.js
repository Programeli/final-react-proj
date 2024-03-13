import Header from './header/Header.tsx';
import Footer from './footer/Footer.tsx';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home.tsx';
import About from './about/about.tsx';
import Contact from './contact/Contact.tsx';

function App() {
  return (
    
    <BrowserRouter>
      <div className='App'>
      <Header />

        <Routes>  
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Home />}></Route>
          <Route path="/login" element={<Home />}></Route>
          <Route path="/register" element={<Home />}></Route>
        </Routes>

      <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
