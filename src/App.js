import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';

import Menu from './components/menu';
import Profile from './components/profile';
import Browse from './components/browse';
import Follow from './components/follow';

function App() {
    // Check if the current route is "/profile"
    const isSignPage =
        window.location.pathname === '/sign-up' || window.location.pathname === '/sign-in';

    return (
        <Router>
            <div>
                {/* Conditionally render the title based on the route */}
                {isSignPage && (
                    <h1 className="title">
                        Welcome to <span className="yellow-text">Lemonade.</span> Ready to{' '}
                        <span className="invest-text">invest your lemons?</span>
                    </h1>
                )}
            </div>
            <div>
                {!isSignPage && (
                    <React.Fragment>
                        <Menu />
                    </React.Fragment>
                )}
            </div>
            <div className="App">
                {/* Wrap the sign-in and sign-up routes in a single Routes component */}
                <Routes>
                    <Route
                        path="/sign-in"
                        element={
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <Login />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <SignUp />
                                </div>
                            </div>
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/follow" element={<Follow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
