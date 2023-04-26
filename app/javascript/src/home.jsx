// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import './home.scss'
import { handleErrors } from '@utils/fetchHelper';
import loginPage from './login/loginPage';


class Home extends React.Component {
  state = {
    tweets: [],
    currentUser: "",
    filter: false
  }
  
  componentDidMount() {
    fetch('/api/tweets')
      .then(handleErrors)
      .then(data => {
        this.setState({
          usersTweets: data.tweets,
          currentUser: data.user,
          loading: false,
        })
      })
  }

  render () {
    return (
        <Layout>
        <div className="container">
        <h1>home</h1>
        <loginPage/>
        </div>
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