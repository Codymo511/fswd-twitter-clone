import React from 'react'
import ReactDOM from 'react-dom'

import './home.scss';



const Home = () => {(
  <h1>Home page react is working</h1>
)

return(
  <div id="homePage" className="container-fluid">
    <div className="row">
      <div className="flex-row col-12 col-lg-6 fw-bold p-4 home-wrapper">

        <div className="twitter-icon text-center text-lg-start">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="my-3 mb-5 mb-lg-3">
          <h1 className="my-3">Welcome to Twitter</h1>
          <h3>Connect with your firends and other fascinating people</h3>
        </div>

        <div className="flex-column flex-sm-row text-center">

          <div className="col-12 col-md-6 d-flex">
            <form  className="home-page-forms d-flex flex-column justify-content-around w-100 p-4">
              <p className="heading">Create your account</p>
              <div>
                <label htmlFor="newUsernameInput" className="form-label" hidden>Username</label>
                <input type="text" className="form-control" id="newUsernameInput" placeholder="username" minLength="3" required></input>
              </div>
              <div>
                <label htmlFor="newEmailInput" className="form-label" hidden>Email adress</label>
                <input type="email" className="form-control" id="newEmailInput" placeholder="email" required></input>
              </div>
              <div>
                <label htmlFor="newPasswordInput" className="form-label" hidden>Password</label>
                <input type="password" className="form-control" id="newPasswordInput" placeholder="password" minLength="8" required></input>
              </div>
              <button type="submit" className="btn mt-4 mt-lg-4" >Sign up</button>
              <p className="form-message my-2">
               
              </p>
            </form>
          </div>

          <div className="col-12 col-md-6 d-flex my-4 my-md-0">
            <form  className="home-page-forms d-flex flex-column justify-content-around w-100 p-4">
              <div>
                <label htmlFor="usernameInput" className="form-label" hidden>Username</label>
                <input type="text" className="form-control" id="usernameInput" placeholder="username" required></input>
              </div>
              <div>
                <label htmlFor="passwordInput" className="form-label" hidden>Password</label>
                <input type="password" className="form-control mb-0 mb-md-3" id="passwordInput" placeholder="password" required></input>
              </div>
              <button type="submit" className="btn mt-4 mt-md-2 mt-lg-0" >Log In</button>
              <p className="form-message m-0 p-0">
              </p>
            </form>
          </div>

        </div>

      </div>
      
    </div>
  </div>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
