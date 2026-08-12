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
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
      </article>
    </SectionShell>
  );
}

export default ContactSection;
