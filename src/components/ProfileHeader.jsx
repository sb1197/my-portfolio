function ProfileHeader({ name, role }) {
  return (
    <section id="home" className="hero">
      <div className="typewriter">
        <h1>Hi, I&apos;m {name}.</h1>
        <p className="subtitle">{role}</p>
      </div>
    </section>
  );
}

export default ProfileHeader;
