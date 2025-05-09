import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

import './App.css'
import { LandingPage } from './components/LandingPage';
import { About} from './components/About';

function App() {
  <>

  <Router>
    <Route path='/' element={LandingPage} />
    <Route path='/about' element={About} />
  </Router>
  </>
}

export default App
