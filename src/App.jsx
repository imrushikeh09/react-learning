import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assignment03/Navbar';
import Home from './assignment03/Home';
import Assignment01 from './assignment01/Assignment01';
import Assignment02 from './assignment02/Assignment02';
import Assignment03 from './assignment03/Assignment03';
import Assignment04 from './assignment04/Assignment04';
import NotFound from './assignment03/NotFound';

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

            {/* Assignment I: Static Component Layout */}
            <Route path="/assignment-static" element={<Assignment01 />} />
            <Route path="/assignment01" element={<Assignment01 />} />

            {/* Assignment II: Show My Name (Dynamic State & Local Storage) */}
            <Route path="/assignment-show-my-name" element={<Assignment02 />} />
            <Route path="/assignment02" element={<Assignment02 />} />

            {/* Assignment III: React Router Implementation */}
            <Route path="/assignment-routing" element={<Assignment03 />} />
            <Route path="/assignment03" element={<Assignment03 />} />

            {/* Assignment IV: Formik & Yup Validation Form */}
            <Route path="/assignment-form" element={<Assignment04 />} />
            <Route path="/assignment04" element={<Assignment04 />} />

            {/* Wildcard 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
