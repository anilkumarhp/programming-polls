import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register'
import Footer from './components/Footer';

// import for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// import mdbreact components
import {MDBContainer } from "mdbreact";



function App() {
  return (
   
      <div className="app">
      <Router>
        <Navbar />
        <Switch>
        <MDBContainer className="pt-100">           
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />   
        </MDBContainer>      
        </Switch>
        <Footer />
      </Router>
      </div>
   
  );
}

export default App;
