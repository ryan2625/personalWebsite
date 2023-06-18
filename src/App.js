import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React from 'react';
import './App.css';
import { Home } from './conponenets/homeC/Home';
import { Contacts } from './conponenets/Contact';
import { Projects } from './conponenets/Projects';
import { Navbar } from './conponenets/navBare/navBar';
import { Blog } from './conponenets/Blog';
import { FutureDev } from './conponenets/Other';
function App() {


  return (
  <>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/futureDev" element={<FutureDev/>}/>
              <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}


export default App;
