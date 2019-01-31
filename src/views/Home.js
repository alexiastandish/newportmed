import React, { Component } from 'react'
import LeftTextSection from '../components/PageSections/LeftTextSection'
import RightTextSection from '../components/PageSections/RightTextSection'
import CenteredSection from '../components/PageSections/CenteredSection'
import ServiceSection from '../components/ServicesC/ServiceSection'
import siteContent from '../siteContent'
import CarouselSlider from '../components/CarouselSlider/CarouselSlider'

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

    const sectionBackground = siteContent.homePage.aboutUs.background
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${sectionBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <LeftTextSection info={aboutUs} className="primary-section--no-color-background" />
          <ServiceSection services={services} className="primary-section--no-color-background" />
        </div>
        <RightTextSection info={ourProcess} className="primary-section" />
        <CenteredSection
          info={testimonials}
          className="secondary-section"
          buttonStyle="btn-secondary"
        >
          <CarouselSlider />
        </CenteredSection>
        <ServiceSection services={newPortMedEffect} className="primary-section" />
        <LeftTextSection info={contactUs} className="secondary-section" />
      </>
    )
  }
}

export default Home
