// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import './home.scss'


class Home extends React.Component {
  render () {
    return (
        <Layout>
        <div className="twitter-icon text-center text-lg-start">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="my-3 mb-5 mb-lg-3">
            <h1 className="my-3">Welcome to Twitter.</h1>
            <h3>Connect with your friends and other fascinating people.</h3>
          </div>
            <Login/>
        </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})