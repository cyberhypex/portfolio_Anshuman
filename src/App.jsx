import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { LandingPage } from './components/LandingPage'
import { About } from './components/About';
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import {Socials} from './components/Socials'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/socials' element={<Socials />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
