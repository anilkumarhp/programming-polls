import React from "react";
import { Link } from 'react-router-dom';
import Register from './Register';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
   
      <MDBRow className="log-container mx-auto">
        <MDBCol  className="py-5 px-4 card-2 ">
          <form>
            <p className="h2 text-center mb-5">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit">Login</MDBBtn>
            </div>
            <Link to='/register' label="Register"></Link>
          </form>
        </MDBCol>
      </MDBRow>
   
  );
};

export default FormPage;