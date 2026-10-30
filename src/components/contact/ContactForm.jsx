import { useState } from 'react';

import '../../styles/ContactForm.css';
import profileImage from '../../images/self.jpg';

function ContactForm({ name, location, contact }) {
  const [isFormValid, setIsFormValid] = useState(false);
  const emailAddress = contact.email.replace(/^mailto:/, '');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderName = formData.get('name');
    const senderEmail = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const body = `From: ${senderName} <${senderEmail}>\n\n${message}`;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="contact-page">
      <section className="contact-content" aria-labelledby="contact-title">
        <div className="contact-form-column">
          <p className="contact-eyebrow">LET&apos;S CONNECT</p>
          <h1 id="contact-title">Get in touch</h1>
          <p className="contact-intro">
            Have a project in mind or just want to say hello? Send me a message.
          </p>

          <form
            className="contact-form"
            onChange={(event) => setIsFormValid(event.currentTarget.checkValidity())}
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              <label>
                Name *
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label>
                Email *
                <input name="email" type="email" autoComplete="email" placeholder="Your email" required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" type="text" placeholder="What's this about?" />
            </label>
            <label>
              Message *
              <textarea name="message" rows="6" placeholder="Tell me about your project..." required />
            </label>
            <button className="contact-send-button" type="submit" disabled={!isFormValid}>
              Send message <span aria-hidden="true">&#8599;</span>
            </button>
            <p className="contact-form-note">
              This opens your email app with the message ready to send.
            </p>
          </form>
        </div>

        <aside className="contact-profile" aria-label={`${name}'s contact details`}>
          <img className="contact-profile-image" src={profileImage} alt={name} />
          <div className="contact-profile-details">
            <p className="contact-profile-name">{name}</p>
            <p className="contact-profile-location">{location}</p>
            <a href={contact.email}>{emailAddress}</a>
            <a href={contact.phone}>{contact.phone.replace(/^tel:/, '')}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ContactForm;
