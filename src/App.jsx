import { PROFILE } from './constants';
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

function App() {
  const profile = PROFILE;
  return (
    <div className="page-shell">
      <NavHeader />
      <ProfileHeader name={profile.name} role={profile.role} />

      <AboutSection summary={profile.summary} imageSrc={profileImage} contact={profile.contact} />

      <SkillsSection skillGroups={profile.technicalSkills} />

      <ProjectsSection projects={profile.projects} />

      <VideoSection src="/intro.mp4" />

      <DetailsSection
        education={profile.education}
        languages={profile.languages}
        hobbies={profile.hobbies}
      />

      <ContactSection location={profile.location} contact={profile.contact} />
    </div>
  );
}

export default App;
