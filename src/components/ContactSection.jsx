import '../styles/ContactSection.css';
import SectionShell from './SectionShell';

function ContactSection({ location, contact }) {
  return (
    <SectionShell id="contact" className="section details-grid">
      <article>
        <h3>Location</h3>
        <p>{location}</p>
      </article>
    </SectionShell>
  );
}

export default ContactSection;
