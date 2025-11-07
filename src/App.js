import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EirUpload from './page/EirUpload';

function App() {
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