import React, { Component, Fragment } from 'react'
import LeftTextSection from '../components/PageSections/LeftTextSection'
import RightTextSection from '../components/PageSections/RightTextSection'
import CenteredSection from '../components/PageSections/CenteredSection'
import ServiceSection from '../components/ServicesC/ServiceSection'
import siteContent from '../siteContent'

class Home extends Component {
  render() {
    const {
      aboutUs,
      services,
      ourProcess,
      testimonials,
      newPortMedEffect,
      contactUs,
    } = siteContent.homePage
    return (
      <Fragment>
        <LeftTextSection info={aboutUs} className="primary-section" />
        <ServiceSection services={services} className="primary-section" />
        <RightTextSection info={ourProcess} className="primary-section" />
        <CenteredSection
          info={testimonials}
          className="secondary-section"
          buttonStyle="btn-secondary"
        />
        <ServiceSection services={newPortMedEffect} className="primary-section" />
        <LeftTextSection info={contactUs} className="secondary-section" />
      </Fragment>
    )
  }
}

export default Home
