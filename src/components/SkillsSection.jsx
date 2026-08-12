import SectionShell from './SectionShell';
import '../styles/SkillsSection.css';

function SkillsSection({ skillGroups }) {
  return (
    <SectionShell id="skills" title="Technical Skills">
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h5>{group.title}</h5>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
