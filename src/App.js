import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Administration from './components/pages/Administration';
import Diagnostic from './components/pages/Diagnostic';
import ProfileSetup from './components/pages/ProfileSetup';
import GcpInterface from './components/pages/GcpInterface';
import ProcessingNodes from './components/pages/ProcessingNodes';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Forgot from './components/pages/Forgot';
import Otp from './components/pages/Otp';
import Popup from './components/pages/Popup';
import  ResetPassword from './components/pages/ResetPassword';
// import  popup from './components/pages/ModalDialog';
// import ModalDialog from './components/pages/ModalDialog'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
       
        <Route path='/Dashboard' exact component={Dashboard} />
        <Route path='/Diagnostic' component={Diagnostic} />
       
        <Route path='/ProfileSetup' component={ProfileSetup} />
        <Route path='/GcpInterface' component={GcpInterface} />
        <Route path='/ProcessingNodes' component={ProcessingNodes} />
        
       
        <Route path='/About' component={About} />
        <Route path='/Administration' component={Administration} />
        
        <Route path='/sign-In' component={SignIn} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Forgot' component={Forgot} />
        <Route path='/Otp' component={Otp} />
        <Route path='/ResetPassword' component={ResetPassword} />
        <Route path='/Popup' component={Popup} />
        {/* <Route path='/popup' component={popup} /> */}
      
      </Switch>
      {/* <div className="container mt-3">
       <ModalDialog />
          </div> */}
    </Router>
      
    
  );
}

export default App;
