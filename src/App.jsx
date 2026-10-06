import { Navigate, Route, Routes } from 'react-router-dom';

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
              <ContactSection contact={profile.contact} />
            </>
          }
        />
        <Route
          path="/about"
          element={<></>}
        />
        <Route path="/projects" element={<></>} />
        <Route
          path="/contact"
          element={<></>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
