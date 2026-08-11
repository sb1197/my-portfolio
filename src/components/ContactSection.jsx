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
      <article>
        <h3>Links</h3>
        <div className="link-list">
          <a href={contact.portfolio} target="_blank" rel="noreferrer">
            Portfolio
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.medium} target="_blank" rel="noreferrer">
            Medium
          </a>
        </div>
      </article>
    </SectionShell>
  );
}

export default ContactSection;
