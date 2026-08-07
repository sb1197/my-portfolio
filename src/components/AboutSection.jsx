import SectionShell from './SectionShell';

function AboutSection({ summary }) {
  return (
    <SectionShell id="about" title="About Me">
      <p>{summary}</p>
    </SectionShell>
  );
}

export default AboutSection;
