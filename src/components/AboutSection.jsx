import '../styles/AboutSection.css';

import ContactSvg from '../images/contact.svg';
import LinkedInSvg from '../images/linkedin.svg';
import GithubSvg from '../images/github.svg';
import MailSvg from '../images/mail.svg';

import SectionShell from './SectionShell';

function AboutSection({ summary, imageSrc, contact }) {
  return (
    <SectionShell id="about">
      <div className="about-intro">
        <p>--------- ABOUT ME ---------</p>
        <h1 className="about-title">Code Meets Technology</h1>
        <span className="about-subtitle">
          A passionate frontend developer from Pune blending creative design with 6+ years of
          technical expertise.
        </span>
      </div>
      <div className="about-grid">
        <div className="about-avatar avatar" aria-hidden>
          <img src={imageSrc} alt="Profile" />
        </div>
        <div className="about-summary">
          <p>{summary}</p>
          <div className="link-list">
            <a href={contact.phone} target="_blank" rel="noreferrer">
              <img src={ContactSvg} alt="Phone" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <img src={LinkedInSvg} alt="LinkedIn" />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <img
                src={GithubSvg}
                alt="GitHub"
                style={{ backgroundColor: '#ffffff', borderRadius: '1rem' }}
              />
            </a>
            <a href={contact.medium} target="_blank" rel="noreferrer">
              <img
                src={'https://cdn-icons-png.flaticon.com/512/3670/3670068.png'}
                alt="Medium"
                height="30"
                width="30"
                style={{ backgroundColor: '#ffffff', borderRadius: '1rem' }}
              />
            </a>
            <a href={contact.email} target="_blank" rel="noreferrer">
              <img src={MailSvg} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
