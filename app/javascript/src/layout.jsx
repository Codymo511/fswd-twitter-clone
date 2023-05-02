import React from "react";
import Login from "./login/loginWidget";
import Signup from "./login/signupWidget";


const Layout = props => {
    return(
        <>
          <div id="home">
           <div className="main">
            <div className="container">
              <div className="row">
              <div className="front-card col-xs-10 col-xs-offset-1">
                  <LoginSignUp/>
                  <Signup />  
                   </div>
                 </div>
                </div>
               </div>
            </div>
        </>
    )
}



export default Layout;