import React from 'react'
//import './.css';

const ContactForm = props => {
  return (
    <form action="#" className="contact">
      <input className="contact__input" placeholder="Name" />
      <input className="contact__input" placeholder="Name" />
      <input className="contact__input" placeholder="Name" />
      <button className="contact__button">
        <svg class="search__icon">
          <use xlinkHref="img/sprite.svg#compass" />
        </svg>
      </button>
    </form>
  )
}
export default ContactForm
