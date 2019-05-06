import React, { Component } from "react";
import LeftTextSection from "../components/PageSections/LeftTextSection";
import RightTextSection from "../components/PageSections/RightTextSection";
import CenteredSection from "../components/PageSections/CenteredSection";
import ServiceSection from "../components/ServicesC/ServiceSection";
import siteContent from "../siteContent";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import Form from "../components/Form/Form";
import NewportMedEffectC from "../components/PageSections/NewportMedEffect/NewportMedEffectC";

class Home extends Component {
  constructor() {
    super();
    this.textRef = React.createRef();
  }

  render() {
    const {
      aboutUs,
      services,
      ourProcess,
      testimonials,
      newPortMedEffect
    } = siteContent.homePage;

    const sectionBackground = siteContent.homePage.aboutUs.background;
    return (
      <div id="list-page" className="transition-item list-page">
        <div
          className="anim"
          style={{
            backgroundImage: `url(${sectionBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}
        >
          <LeftTextSection
            info={aboutUs}
            className="primary-section--no-color-background "
          />
          <ServiceSection
            services={services}
            className="primary-section--no-color-background "
          />
        </div>
        <RightTextSection info={ourProcess} className="primary-section" />

        <CenteredSection
          info={testimonials}
          className="secondary-section "
          buttonStyle="btn btn-secondary"
        >
          <CarouselSlider testimonials={testimonials.testimonials} />
        </CenteredSection>
        <NewportMedEffectC
          header={newPortMedEffect.header}
          services={newPortMedEffect.newPortMedEffectSquares}
          className="primary-section"
        />
        <Form />
      </div>
    );
  }
}

export default Home;
