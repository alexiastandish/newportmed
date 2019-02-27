import React, { useState } from 'react'
import './Form.scss'

function Form() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  // const [formInput, submitFormInput] = useState()
  console.log('formState', formState)
  return (
    <section className="contact">
      <div className="contact__section section section__not-centered">
        <section className="heading">
          <h3 className="heading__left">
            <span className="heading__left--main">Contact Us</span>
            <span className="heading__left--sub">Contact us subtext</span>
          </h3>
        </section>

        <form action="/action_page.php" className="contact__form">
          <label>First Name</label>
          <input
            type="text"
            id="firstname"
            className="contact__input"
            value={formState.firstName}
            onChange={e => {
              setFormState({ ...formState, firstName: e.target.value })
            }}
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            className="contact__input"
            value={formState.lastName}
            onChange={e => {
              setFormState({ ...formState, lastName: e.target.value })
            }}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Here"
            className="contact__input"
            value={formState.email}
            onChange={e => {
              setFormState({ ...formState, email: e.target.value })
            }}
          />
          <label>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type here..."
            className="contact__input"
            value={formState.message}
            onChange={e => {
              setFormState({ ...formState, message: e.target.value })
            }}
          />
          <input type="submit" className="contact__button" value="Submit" />
        </form>
      </div>
    </section>
  )
}
export default Form
