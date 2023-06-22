import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import React from 'react';
import './App.css';
import { Home } from './conponenets/homeComponent/Home';
import { Contacts } from './conponenets/Contact';
import { Projects } from './conponenets/projectsComponents/Projects';
import { Navbar } from './conponenets/navBare/navBar';
import { Blog } from './conponenets/Blog';
import { FutureDev } from './conponenets/Other';
import { Research } from './conponenets/projectsComponents/researchComponent/Research';
import { Coding } from './conponenets/projectsComponents/codingComponent/Coding';
import { Nhawk } from './conponenets/projectsComponents/codingComponent/nightHawkFitness/hawkPicture';
import { HawkContainer } from './conponenets/projectsComponents/codingComponent/nightHawkFitness/hawkContainer';
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
              <Route path="/coding" element={<Coding/>}/>
              <Route path="/research" element={<Research/>}/>
              <Route path="/nightHawk" element={<HawkContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}


export default App;
