import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import siteContent from './siteContent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Nav />
          <div className="container fadeInAnimation">
            <Routes siteContent={siteContent} />
          </div>
          <Footer className="footer" />
        </>
      </BrowserRouter>
    )
  }
}

export default App
