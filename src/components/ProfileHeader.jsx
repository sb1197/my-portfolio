import '../styles/ProfileHeader.css';

function ProfileHeader({ name, role }) {
  return (
    <section id="home" className="hero">
      <div className="hero-intro">
        <div className="hero-fade-up">
          <span className="status-indicator">
            <span className="status-flex">
              <span className="status-ping"></span>
              <span className="status-circle"></span>
            </span>
            Open to Work · Software Engineer
          </span>
        </div>
        <h2>Hi, I&apos;m </h2>
        <h1 className="typewriter name">{name}.</h1>
        <p className="subtitle">{role}</p>
      </div>
    </section>
  );
}

export default ProfileHeader;
