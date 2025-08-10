import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Accueil from './pages/Accueil';

function App() {
  
  const [state, setState] = useState(null);


  useEffect(() => {
   
  }, []);

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Accueil />} />
    </Routes>
    </>
  );
}

export default App;