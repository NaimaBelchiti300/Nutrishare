import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Under from './sections/under';
import Home from './sections/home';
import CreateAccount from './sections/Auth/createAccount';
import Login from './sections/Auth/login';
function App() {
  return (
    <Router> 
      <div>
        
        <Routes> 
        <Route path="/" element={<Home/>}/>         
         <Route path="/under" element={<Under />} />
         <Route path="/CreetAccount" element={<CreateAccount/>}/>
         <Route path="/login" element={<Login/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
