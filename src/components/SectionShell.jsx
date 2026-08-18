import '../styles/SectionShell.css';

function SectionShell({ title, titleLevel = 'h3', children, className = '', id }) {
  const Heading = titleLevel;

  return (
    <section id={id} className={`section ${className}`.trim()}>
      {title ? <Heading className="section-title">{title}</Heading> : null}
      {children}
    </section>
  );
}

export default SectionShell;
