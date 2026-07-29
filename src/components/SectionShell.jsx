function SectionShell({ title, titleLevel = 'h3', children, className = '' }) {
  const Heading = titleLevel;

  return (
    <section className={`section ${className}`.trim()}>
      {title ? <Heading>{title}</Heading> : null}
      {children}
    </section>
  );
}

export default SectionShell;
