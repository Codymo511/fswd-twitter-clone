import React, { useState} from 'react';
import ReactDOM from 'react-dom';


const Home = () => {

  //   states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpMessage, setSignUpMessage] = useState("");
  const [logInMessage, setLogInMessage] = useState("");
  
  //   handlers

 // Handling the name change
const handleName = (e) => {
  setName(e.target.value);
  setSubmitted(false);
  };
  
  // Handling the email change
  const handleEmail = (e) => {
  setEmail(e.target.value);
  setSubmitted(false);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
  };

 // Handling the form submission
const handleSubmit = (e) => {
  e.preventDefault();
  if (name === '' || email === '' || password === '') {
  setError(true);
  } else {
  setSubmitted(true);
  setError(false);
  }
  };

  //  go to feed if user is logged in

  //useEffect(() => {
    //authenticateUser(function(response) {
     // if (response.authenticated == true) {
      //  window.location.assign('/feed');
    // }
  //  })
  //}, [])

  return(
    <div id="homePage" className="container-fluid">
      <div className="row">

        <div id="homeLeft" className="col-6 d-none d-lg-flex px-0">
          <img className="img-fluid p-4 ps-0" src={image} alt="graffiti wall art image"></img>
        </div>

        <div className="col-12 col-lg-6 fw-bold p-4 home-wrapper">

          <div className="twitter-icon text-center text-lg-start">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="my-3 mb-5 mb-lg-3">
            <h1 className="my-3">Happening Now</h1>
            <h3>Join Twitter today.</h3>
          </div>

          <div className="row flex-column flex-sm-row text-center">

            <div className="col-12 col-md-6 d-flex">
              <form onSubmit={handleSignUp} className="home-page-forms d-flex flex-column justify-content-around w-100 p-4">
                <p className="heading">Create your account</p>
                <div>
                  <label htmlFor="newUsernameInput" className="form-label" hidden>Username</label>
                  <input onChange={handleName} className="input"
                  value={name} type="text" />                
                  </div>
                <div>
                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                value={email} type="email" />
                </div>
                <div>
                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                value={password} type="password" />
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">
                Submit
                </button>
              </form>
            </div>

            <div className="col-12 col-md-6 d-flex my-4 my-md-0">
              <form onSubmit={handleLogIn} className="home-page-forms d-flex flex-column justify-content-around w-100 p-4">
                <p className="heading">Already have an account?</p>
                <div>
                  <label htmlFor="usernameInput" className="form-label" hidden>Username</label>
                  <input type="text" className="form-control" id="usernameInput" placeholder="username" required></input>
                </div>
                <div>
                  <label htmlFor="passwordInput" className="form-label" hidden>Password</label>
                  <input type="password" className="form-control mb-0 mb-md-3" id="passwordInput" placeholder="password" required></input>
                </div>
                <button type="submit" className="btn mt-4 mt-md-2 mt-lg-0" onSubmit={handleLogIn}>Log In</button>
                <p className="form-message m-0 p-0">
                  {logInMessage}
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
    document.body.appendChild(document.createElement('div'))
  )
})
