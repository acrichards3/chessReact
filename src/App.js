import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import About from './pages/About';
import Principles from './pages/Principles';
import NotFound from './components/NotFound';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="sidenav">
          <Sidebar />
          <div className="container">
            <div className="row">
              <div className="col">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/dashboard" element={<Home />} />
                  <Route
                    exact
                    path="/privacy-policy"
                    element={<PrivacyPolicy />}
                  />
                  <Route
                    exact
                    path="/terms-&-conditions"
                    element={<TermsConditions />}
                  />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/principles" element={<Principles />} />
                  <Route exact path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
