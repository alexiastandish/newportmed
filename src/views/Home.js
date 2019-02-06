import React, { Component } from 'react'
import LeftTextSection from '../components/PageSections/LeftTextSection'
import RightTextSection from '../components/PageSections/RightTextSection'
import CenteredSection from '../components/PageSections/CenteredSection'
import ServiceSection from '../components/ServicesC/ServiceSection'
import siteContent from '../siteContent'
import CarouselSlider from '../components/CarouselSlider/CarouselSlider'
// import { Transition } from 'react-transition-group'
// import anime from 'animejs'

class Home extends Component {
  constructor() {
    super()
    this.textRef = React.createRef()
  }

  // componentDidMount() {
  //   anime({
  //     targets: '.animeComponent',
  //     translateX: [250, 0],
  //     easing: 'easeInOutSine',
  //     delay: anime.stagger(100),
  //     // direction: 'alternate',
  //     // rotate: '1turn',
  //     // backgroundColor: '#FFF',
  //     // duration: 2000,
  //     // loop: false,
  //   })
  // }
  render() {
    const {
      aboutUs,
      services,
      ourProcess,
      testimonials,
      newPortMedEffect,
      contactUs,
    } = siteContent.homePage
    // console.log('aboutUs', aboutUs)

    const sectionBackground = siteContent.homePage.aboutUs.background
    return (
      <div id="list-page" className="transition-item list-page">
        <div
          className="anim"
          style={{
            backgroundImage: `url(${sectionBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <LeftTextSection info={aboutUs} className="primary-section--no-color-background " />
          <ServiceSection services={services} className="primary-section--no-color-background " />
        </div>
        <RightTextSection info={ourProcess} className="primary-section " />
        <CenteredSection
          info={testimonials}
          className="secondary-section "
          buttonStyle="btn-secondary"
        >
          <CarouselSlider testimonials={testimonials.testimonials} />
        </CenteredSection>
        <ServiceSection
          header={newPortMedEffect.header}
          services={newPortMedEffect.newPortMedEffectSquares}
          className="primary-section"
        />
        <LeftTextSection info={contactUs} className="secondary-section" />
      </div>
    )
  }
}

export default Home
