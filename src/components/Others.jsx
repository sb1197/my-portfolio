import SectionShell from './SectionShell';
import '../styles/DetailsSection.css';

function Others() {
  return (
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
  );
}

export default Others;
