import React from 'react'
import ReactDOM from 'react-dom'


import './feeds.scss';


const Feeds = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main container">
        <div className="row">
        <h1>feed</h1>
        </div>
      </div>
    </React.Fragment>
  )
} 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})