// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import './home.scss'
import { handleErrors } from '@utils/fetchHelper';



class Home extends React.Component {
  state = {
    properties: [],
    total_pages: null,
    next_page: null,
    loading: true,
  }

  componentDidMount() {
    fetch('/api/properties?page=1')
      .then(handleErrors)
      .then(data => {
        this.setState({
          properties: data.properties,
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }

  render () {
    const { properties, next_page, loading } = this.state;
    return (
      <Layout>
        <div className="container pt-4">
          <h4 className="mb-1">Top-rated places to stay</h4>
          <p className="text-secondary mb-3">Explore some of the best-reviewed stays in the world</p>
          <div className="row">
            {properties.map(property => {
              return (
                <div key={property.id} className="col-6 col-lg-4 mb-4 property">
                  <a href={`/property/${property.id}`} className="text-body text-decoration-none">
                    <div className="property-image mb-1 rounded" style={{ backgroundImage: `url(${property.image_url})` }} />
                    <p className="text-uppercase mb-0 text-secondary"><small><b>{property.city}</b></small></p>
                    <h6 className="mb-0">{property.title}</h6>
                    <p className="mb-0"><small>${property.price_per_night} USD/night</small></p>
                  </a>
                </div>
              )
            })}
          </div>
          {loading && <p>loading...</p>}
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

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className="container">
          <h1>Home</h1>
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