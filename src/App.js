import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Under from './sections/under';
import Home from './sections/home';
function App() {
  return (
    <Router> {/* Assure-toi d'envelopper toute l'application avec Router */}
      <div>
        
        <Routes> 
        <Route path="/" element={<Home/>}/>         
         <Route path="/under" element={<Under />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
