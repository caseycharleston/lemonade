import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Profile from './components/profile.js'


function App() {
  return (
      <Router>
        <div>
          <h1 className="title">
            Welcome to <span className="yellow-text">Lemonade</span>. Ready to{' '}
            <span className="invest-text">use those lemons?</span>
          </h1>
        </div>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/sign-in" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  )
}

export default App
