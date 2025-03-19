// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calls from './Calls';
import Analytics from './Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calls />} />
        <Route path="/analytics/:audioId" element={<Analytics />} />
      </Routes>
    </Router>
  );
}


export default App
