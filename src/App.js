import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Nav from './components/Nav/Nav'
import siteContent from './siteContent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes siteContent={siteContent} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
