import '../styles/ContactSection.css';
import SectionShell from './SectionShell';

function ContactSection({ location, contact }) {
  return (
    <SectionShell id="contact" className="section details-grid">
      <article>
        <h3>Location</h3>
        <p>{location}</p>
      </article>
      <article>
        <h3>Contact</h3>
        <p>
          Email: <a href={contact.email}>{contact.email.replace('mailto:', '')}</a>
        </p>
        <p>
          Phone: <a href={contact.phone}>{contact.phone.replace('tel:', '')}</a>
        </p>
      </article>
    </SectionShell>
  );
}

export default ContactSection;
