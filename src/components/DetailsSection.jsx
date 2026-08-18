import SectionShell from './SectionShell';
import '../styles/DetailsSection.css';

function DetailsSection({ education, languages, hobbies }) {
  return (
    <>
      <SectionShell id="education" title="Education">
        <div className="detail-list">
          {education.map((item) => (
            <div key={`${item.degree}-${item.institution}`}>
              <strong>{item.degree}</strong>
              <span>{item.institution}</span>
              <span>{item.period}</span>
              {item.details ? <span>{item.details}</span> : null}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

export default DetailsSection;
