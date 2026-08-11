import '../styles/ProfileHeader.css';

function ProfileHeader({ name, role }) {
  return (
    <section id="home" className="hero">
      <div className="hero-intro">
        <h2>Hi, I&apos;m </h2>
        <h1 className="typewriter name">{name}.</h1>
        <p className="subtitle">{role}</p>
      </div>
    </section>
  );
}

export default ProfileHeader;
