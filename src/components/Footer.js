import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small footer w-100" color="unique-color-dark">  
    
        <MDBContainer fluid className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: Developed by Anil Kumar
        </MDBContainer>
      
    </MDBFooter>
  );
}

export default FooterPage;