import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors } from '@utils/fetchHelper';
import homePage from './userComponents/homePage';
import './home.scss';
import Layout from './layout'

class Home extends React.Component {
      state = {
        authenticated: false,
        username: "",
        email: "",
      }
      
  componentDidMount() {
    fetch('/api/authenticated') 
    .then(handleErrors)
    .then(data => {
      this.setState({
        authenticated: data.authenticated,
        username: data.username,
        email: data.email,
      })
    })
  }

  render() {
    const {authenticated, username, email } = this.state;
    if (authenticated) {
      return(
          <homePage user_id={this.props.user_id} username={username} email={email} />
      );
    };
      return(
        <Layout />
      )
    }
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Home/>,
    document.body.appendChild(document.createElement('div')),
)
})