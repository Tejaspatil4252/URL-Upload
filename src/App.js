import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EirUpload from './page/EirUpload';
import FullPageLoader from './components/FullPageLoader';

function App() {  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EirUpload />} />
        <Route path="/eir-upload" element={<EirUpload />} />
      </Routes>
    </Router>
  );
}

export default App;