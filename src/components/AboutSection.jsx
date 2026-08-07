import SectionShell from './SectionShell';

function AboutSection({ summary, imageSrc }) {
  return (
    <SectionShell id="about" title="About Me">
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
