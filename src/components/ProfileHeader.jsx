function ProfileHeader({ name, role, imageSrc }) {
  return (
    <section className="hero">
      <div>
        <h1>Hi, I&apos;m {name}</h1>
        <p className="subtitle">{role}</p>
      </div>
      <div className="avatar" aria-hidden="true">
        <img src={imageSrc} alt={`${name} portrait`} />
      </div>
    </section>
  );
}

export default ProfileHeader;
