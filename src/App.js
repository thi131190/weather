import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='container-fluid text-white my-auto'>
        <div className='container mx-auto my-4 py-4'>
          <div className='row justify-content-center text-center'>
            <h1 className='col-12 display-4 my-2 py-3 text-success'>
              Awesome Weather App
            </h1>
            <h2 className='col-12'>Location Name</h2>
            <h3 className='col-12 text-danger'>Temperature</h3>
            <h3 className='col-12'>Weather Description</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default App
