import React, { Component } from "react";

// components required for styling navbar
import {
    MDBNavbar,
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem,
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse
} from "mdbreact";

// import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false,
  linkValue: "Register"
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  if(true) {
    this.setState({ linkValue: "Logout"})
  }
  
}

render() {
  return (    
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Poll App</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="px-4">
          <MDBNavbarNav left className='w-100'>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>           
            <MDBNavItem className="ml-auto">
            <MDBNavLink to="/register">Register</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>         
        </MDBCollapse>
      </MDBNavbar>    
    );
  }
}

export default NavbarPage;