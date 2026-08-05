import SectionShell from './SectionShell';

function DetailsSection({ education, languages, hobbies }) {
  return (
    <>
      <SectionShell title="" className="details-grid">
        <article>
          <h3>Education</h3>
          <ul className="detail-list">
            {education.map((item) => (
              <li key={`${item.degree}-${item.institution}`}>
                <strong>{item.degree}</strong>
                <span>{item.institution}</span>
                <span>{item.period}</span>
                {item.details ? <span>{item.details}</span> : null}
              </li>
            ))}
          </ul>
        </article>
      </SectionShell>
      <SectionShell title="" className="details-grid">
        <article>
          <h3>Languages Spoken</h3>
          <ul className="detail-list">
            {languages.map((language) => (
              <li key={language}>
                <strong>{language}</strong>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Hobbies</h3>
          <ul className="detail-list">
            {hobbies.map((hobby) => (
              <li key={hobby}>
                <strong>{hobby}</strong>
              </li>
            ))}
          </ul>
        </article>
      </SectionShell>
    </>
  );
}

export default DetailsSection;
