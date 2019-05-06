import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './views/Home'
import AboutV from './views/AboutV'
import ServicesV from './views/ServicesV'
import OurProcessV from './views/OurProcessV'
import TestimonialsV from './views/TestimonialsV'
import NewPortMedEffectV from './views/NewPortMedEffectV'
import ContactV from './views/ContactV'

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <AboutV />} />
      <Route
        path="/services"
        render={() => <ServicesV services={props.siteContent.servicesPage} />}
      />
      <Route path="/services#practice-advocates" render={() => <ServicesV />} />
      <Route path="/ourProcess" render={() => <OurProcessV />} />
      <Route path="/testimonials" render={() => <TestimonialsV />} />
      <Route path="/newportmedEffect" render={() => <NewPortMedEffectV />} />
      <Route path="/contact" render={() => <ContactV />} />
      <Redirect to="/" />
    </Switch>
  )
}
