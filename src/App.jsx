import { Navigate, Route, Routes } from 'react-router-dom';

import { PROFILE } from './constants';
import ContactForm from './components/contact/ContactForm';
import AboutPage from './components/about/AboutPage';
import ProjectsPage from './components/projects/ProjectsPage';
import {
  AboutSection,
  DetailsSection,
  Footer,
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProfileHeader name={profile.name} role={profile.role} />
              <AboutSection
                summary={profile.summary}
                imageSrc={profileImage}
                contact={profile.contact}
              />
              <SkillsSection skillGroups={profile.technicalSkills} />
              <ProjectsSection projects={profile.projects} />
              <VideoSection src="/intro.mp4" />
              <DetailsSection education={profile.education} />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/contact"
          element={
            <ContactForm
              name={profile.name}
              location={profile.location}
              contact={profile.contact}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer contact={profile.contact} />
    </div>
  );
}

export default App;
