import SectionShell from './SectionShell';
import '../styles/DetailsSection.css';

function DetailsSection({ education, languages, hobbies }) {
  return (
    <>
      <SectionShell id="education" title="" className="details-grid">
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
          <h3>Languages</h3>
          <ul className="detail-list">
            {languages.map((language) => (
              <li key={language}>
                <span>{language}</span>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Hobbies</h3>
          <ul className="detail-list">
            {hobbies.map((hobby) => (
              <li key={hobby}>
                <span>{hobby}</span>
              </li>
            ))}
          </ul>
        </article>
      </SectionShell>
    </>
  );
}

export default DetailsSection;
