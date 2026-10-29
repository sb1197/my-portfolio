import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { NAV_LINKS } from '../constants';
import '../styles/NavHeader.css';
import imageSrc from '../images/logo.png';

export default function NavHeader() {
  const [theme, setTheme] = useState(() => {
    try {
      return (
        localStorage.getItem('theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark')
      );
    } catch (e) {
      return 'dark';
    }
  });

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Unable to persist theme preference', e);
    }
  }, [theme]);

  useEffect(() => {
    // Hide nav when scrolling down, show when scrolling up or at top
    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      if (currentY <= 0) {
        setHidden(false);
      } else if (currentY > lastY.current && currentY > 80) {
        setHidden(true);
      } else if (currentY < lastY.current) {
        setHidden(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`nav-header ${hidden ? 'hidden' : ''}`}>
      <button
        type="button"
        className={`nav-backdrop ${open ? 'open' : 'hidden'}`}
        onClick={() => setOpen(false)}
        aria-label="Close navigation menu"
      />
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={imageSrc} alt="logo" height={40} />
          <div className="nav-logo">Shweta</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            ☰
          </button>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {NAV_LINKS.map(([label, href, icon]) => {
              const content = (
                <>
                  {/* <span className="nav-icon" aria-hidden>
                    {icon}
                  </span> */}
                  <span className="nav-label">{label}</span>
                </>
              );

              return (
                <li key={href}>
                  {href === '/resume.html' || href.includes('#') ? (
                    <a href={href} onClick={() => setOpen(false)}>
                      {content}
                    </a>
                  ) : (
                    <Link to={href} onClick={() => setOpen(false)}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </div>
  );
}
