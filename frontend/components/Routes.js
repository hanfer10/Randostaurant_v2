import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Preferences } from './index';

const AppRoutes = () => {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </div>
      </Router>
  )
};

export default AppRoutes;
