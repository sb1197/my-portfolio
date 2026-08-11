import SectionShell from './SectionShell';
import '../styles/AboutSection.css';

function AboutSection({ summary, imageSrc }) {
  return (
    <SectionShell id="about">
      <div className="about-intro">
        <p>--------- ABOUT ME ----------</p>
        <h1 className="about-title">Code Meets Technology</h1>
        <span className="about-subtitle">A passionate frontend developer from Pune blending creative design with 6+ years of technical expertise.</span>
      </div>
      <div className="about-grid">
        <div className="about-avatar avatar" aria-hidden>
          <img src={imageSrc} alt="Profile" />
        </div>
        <div className="about-summary">
          <p>{summary}</p>
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
