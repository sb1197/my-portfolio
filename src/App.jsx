import { EDUCATION, LANGUAGES, PROJECTS, SUMMARY, TECHNICAL_SKILLS, HOBBIES } from './constants';
import {
  AboutSection,
  ContactSection,
  DetailsSection,
  ProfileHeader,
  NavHeader,
  ProjectsSection,
  SkillsSection,
  VideoSection,
} from './components';
import profileImage from './images/self.jpg';

const profile = {
  name: 'Shweta Bochare',
  role: 'Senior Software Engineer at Peak - A UiPath Company',
  location: 'Pune, Maharashtra, India',
  summary: SUMMARY,
  education: EDUCATION,
  languages: LANGUAGES,
  hobbies: HOBBIES,
  projects: PROJECTS,
  technicalSkills: TECHNICAL_SKILLS,
  contact: {
    email: 'shwetabochare11@gmail.com',
    portfolio: 'https://my-portfolio-five-henna-98.vercel.app/',
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
        <NavHeader />
        <ProfileHeader name={profile.name} role={profile.role} />

        <AboutSection summary={profile.summary} imageSrc={profileImage} />

        <ContactSection location={profile.location} contact={profile.contact} />

        <SkillsSection skillGroups={profile.technicalSkills} />

        <ProjectsSection projects={profile.projects} />

        <VideoSection src="/intro.mp4" />

        <DetailsSection
          education={profile.education}
          languages={profile.languages}
          hobbies={profile.hobbies}
        />
      </main>
    </div>
  );
}

export default App;
