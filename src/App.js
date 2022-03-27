import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import About from './pages/About';
import Principles from './pages/Principles';
import Rules from './pages/Rules';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import Faq from './pages/Faq';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InitContext } from './contexts/InitialContext';
import './app.css';

function App() {
  const [initialUser, setInitialUser] = useState('HIKARU');

  return (
    <InitContext.Provider value={{ initialUser, setInitialUser }}>
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
                    <Route exact path="/rules" element={<Rules />} />
                    <Route
                      exact
                      path="/beginner-openings"
                      element={<Beginner />}
                    />
                    <Route
                      exact
                      path="/intermediate-openings"
                      element={<Intermediate />}
                    />
                    <Route
                      exact
                      path="/advanced-openings"
                      element={<Advanced />}
                    />
                    <Route exact path="/faq" element={<Faq />} />
                    <Route exact path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </InitContext.Provider>
  );
}

export default App;
