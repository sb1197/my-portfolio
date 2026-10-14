import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NAV_LINKS } from '../constants';
import GithubSvg from '../images/github.svg';
import LinkedInSvg from '../images/linkedin.svg';
import '../styles/Footer.css';

const socialLinks = [
  ['LinkedIn', 'linkedin', LinkedInSvg],
  ['Medium', 'medium', 'https://cdn-icons-png.flaticon.com/512/3670/3670068.png'],
  ['GitHub', 'github', GithubSvg],
];

function Footer({ contact }) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => setShowScrollToTop(window.scrollY > 50);

    updateScrollPosition();
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-column footer-intro">
          <h2>Shweta Bochare</h2>
          <p>Senior Software Engineer focused on building clear, useful web experiences.</p>
        </section>

        <nav className="footer-column" aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                {href === '/resume.html' || href.includes('#') ? (
                  <a href={href}>{label}</a>
                ) : (
                  <Link to={href}>{label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-column">
          <h2>Connect</h2>
          <div className="connect-social-links">
            {socialLinks.map(([label, key, icon]) => (
              <a
                key={key}
                className="connect-social-link"
                href={contact[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
              >
                <img src={icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="connect-contact-details">
            <p>
              <a href={contact.email}>{contact.email.replace('mailto:', '')}</a>
            </p>
            <p>
              <a href={contact.phone}>{contact.phone.replace('tel:', '')}</a>
            </p>
          </div>
        </section>
      </div>

      <p className="footer-copyright">© 2026 Shweta Bochare. Built with React.js &amp; Vite.</p>

      {showScrollToTop && (
        <button
          type="button"
          className="scroll-to-top"
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;