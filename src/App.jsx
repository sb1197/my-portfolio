import { EDUCATION, LANGUAGES, PROJECTS, SUMMARY, TECHNICAL_SKILLS } from './constants';
import {
  AboutSection,
  ContactSection,
  DetailsSection,
  ProfileHeader,
  ProjectsSection,
  SkillsSection,
} from './components';

const profile = {
  name: 'Shweta Bochare',
  role: 'Frontend Developer',
  location: 'Pune, Maharashtra, India',
  summary: SUMMARY,
  education: EDUCATION,
  languages: LANGUAGES,
  projects: PROJECTS,
  technicalSkills: TECHNICAL_SKILLS,
  contact: {
    email: 'shwetabochare11@gmail.com',
    portfolio: 'https://example.com',
    phone: '+91 7350519505',
    linkedin: 'https://www.linkedin.com/in/shweta-bochare-1a0b4a1b6/',
    github: 'https://github.com/shwetabochare',
    medium: 'https://medium.com/@shwetabochare',
  },
};

function App() {
  return (
    <div className="page-shell">
      <main className="profile-card">
        <ProfileHeader name={profile.name} role={profile.role} imageSrc="src/images/self.jpg" />

        <AboutSection summary={profile.summary} />

        <ContactSection location={profile.location} contact={profile.contact} />

        <SkillsSection skillGroups={profile.technicalSkills} />

        <ProjectsSection projects={profile.projects} />

        <DetailsSection education={profile.education} languages={profile.languages} />
      </main>
    </div>
  );
}

export default App;
