import SectionShell from './SectionShell';

function AboutSection({ summary }) {
  return (
    <SectionShell title="About Me">
      <p>{summary}</p>
    </SectionShell>
  );
}

export default AboutSection;
