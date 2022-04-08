import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Preferences } from './index';
import Restaurant from './Restaurant';

const AppRoutes = () => {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes>
        </div>
      </Router>
  )
};

export default AppRoutes;
