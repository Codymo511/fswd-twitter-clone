import React from 'react'
import ReactDOM from 'react-dom'
import Login from './loginPage';
import Signup from './signupWidget';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    <Signup />,
    document.body.appendChild(document.createElement('div')),
  )
})