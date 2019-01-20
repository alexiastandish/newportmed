import React, { Component } from 'react'
import LeftTextSection from '../components/PageSections/LeftTextSection'
import ServiceSection from '../components/ServicesC/ServiceSection'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about: {},
      services: [],
      ourProcess: {},
      testimonials: [],
      newportMedEffects: [],
      contactUs: {},
    }
  }

  componentDidMount() {
    const { ...data } = this.props.homePageInfo
    this.setState({
      about: data.aboutUs,
      services: [...data.services],
      ourProcess: data.ourProcess,
      testimonials: data.testimonials,
      newportMedEffects: [...data.newPortMedEffect],
      contactUs: data.contactUs,
    })
  }

  render() {
    return (
      <div className="Home">
        <LeftTextSection info={this.state.about} />
        <ServiceSection services={this.state.services} />
        <LeftTextSection info={this.state.contactUs} />
      </div>
    )
  }
}

export default Home
