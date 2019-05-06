import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    message: ""
  });

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const name = document.getElementById('name').value
  //   const email = document.getElementById('email').value
  //   const message = document.getElementById('message').value
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3001/send',
  //     data: {
  //       name: name,
  //       email: email,
  //       messsage: message,
  //     },
  //   }).then(response => {
  //     if (response.data.msg === 'success') {
  //       alert('Message Sent.')
  //       resetForm()
  //     } else if (response.data.msg === 'fail') {
  //       alert('Message failed to send.')
  //     }
  //   })
  // }

  // function resetForm() {
  //   document.getElementById('contact-form').reset()
  // }

  return (
    <section className="contact">
      <div className="contact__section section section__not-centered">
        <section className="heading">
          <h3 className="heading__left">
            <span className="heading__left--main">Contact Us</span>
            <span className="heading__left--sub">
              Send a message! Let's chat...
            </span>
          </h3>
        </section>

        <form
          action="https://formspree.io/alexiastandish@gmail.com"
          method="POST"
          className="contact__form"
        >
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            className="contact__input"
            value={formState.fname}
            onChange={e => {
              setFormState({ ...formState, fname: e.target.value });
            }}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            className="contact__input"
            value={formState.lname}
            onChange={e => {
              setFormState({ ...formState, lname: e.target.value });
            }}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Your Email Here"
            className="contact__input"
            value={formState.email}
            onChange={e => {
              setFormState({ ...formState, email: e.target.value });
            }}
          />
          <label>Message</label>
          <textarea
            placeholder="Type here..."
            className="contact__input"
            name="message"
            rows="5"
            value={formState.message}
            onChange={e => {
              setFormState({ ...formState, message: e.target.value });
            }}
          />
          <button type="submit" className="btn btn-tertiary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default Form;
