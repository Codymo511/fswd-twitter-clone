// layout.js
import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 bg-light">
       
      </footer>
    </React.Fragment>
  );
}

export default Layout;