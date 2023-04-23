// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import './home.scss'


class Home extends React.Component {
  state = {
    usersTweets: [],
    currentUser: "",
    tweetCount: 0,
    loading: true,
  }
  
  componentDidMount() {
    fetch('/api/tweets')
      .then(handleErrors)
      .then(data => {
        this.setState({
          usersTweets: data.properties,
          currentUser: data.total_pages,
          tweetCount: data.next_page,
          loading: false,
        })
      })
  }


  render () {
    return (
        <Layout>
        <div className="container">
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