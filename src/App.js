import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Portal from './portal';
import Contribute from './contribute';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <div id='headerContent'>
            <Link to='/contribute'>Contribute</Link>
            <Link to='/' id='headLink'>
            <h1>RCOEM PYQPortal</h1>
            <h2> &nbsp;&nbsp;RCOEM<br />PYQPortal</h2>
            </Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </header>

        <div id='mainBody'>
          <br />
          <div id='portalContainer'>
            <Routes>
              <Route path='/contribute' element={<Contribute />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/' element={<Portal />} />
            </Routes>
          </div>
        </div>

        <footer>
          <hr color="black" />
          <div id='footerContent'>
            <h3>~ Made with ❤ by Shehzan Sk</h3>
          </div>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
