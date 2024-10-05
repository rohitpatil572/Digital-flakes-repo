import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Import the Login component
import Reset from './Reset'; // Ensure you have this component
import Home from './Home'; // Ensure you have this component as well

// Main App component
function App() {
  return (
    <Router>
      <div className='bg-main d-flex flex-start'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-8 ml-5  form-div shadow'>
              <Routes>
                {/* Route for the login form */}
                <Route path="/" element={<Login />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/admin" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
