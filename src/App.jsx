import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AssignmentStatic from './components/AssignmentStatic';
import AssignmentShowMyName from './components/AssignmentShowMyName';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily: 'system-ui, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Navbar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignment-static" element={<AssignmentStatic />} />
            <Route path="/assignment-show-my-name" element={<AssignmentShowMyName />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
