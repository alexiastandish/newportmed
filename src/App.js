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
          <div className="container fadeInAnimation">
            <Routes siteContent={siteContent} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
