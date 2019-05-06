import React, { Component } from 'react'
import Header from '../components/Header/Header'
import { withRouter } from 'react-router-dom'
//import './Services.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import Service from '../components/Services/Service'
import { goToAnchor, configureAnchors } from 'react-scrollable-anchor'

class Services extends Component {
  constructor() {
    super()

    this.state = {
      services: {},
      serviceOptions: [],
    }
  }

  componentDidMount() {
    this.setState({
      services: this.props.services,
      serviceOptions: this.props.services.serviceOptions,
    })
  }

  componentWillUpdate(nextProps) {
    if (nextProps.location.state) {
      goToAnchor(nextProps.location.state)
      configureAnchors({ offset: -60, scrollDuration: 800 })
    }
  }

  render() {
    const { services, serviceOptions } = this.state

    return (
      <div>
        <div className="services">
          <Header header={services.header} desc={services.desc} />
          {serviceOptions.map((service, index) => (
            <ScrollableAnchor id={service.id} key={index}>
              <div>
                <Service serviceInfo={service} />
              </div>
            </ScrollableAnchor>
          ))}
        </div>
      </div>
    )
  }
}
export default withRouter(Services)
