import { useEffect, useState } from 'react';

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

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Unable to persist theme preference', e);
    }
  }, [theme]);

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Journey', '#journey'],
    ['Blog', '/blog.html', '✍️'],
    ['Resume', '/resume.html', '📄'],
    ['Contact', '#contact'],
  ];

  return (
    <div className="nav-header">
      <nav>
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href, icon]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                <span className="nav-icon" aria-hidden>
                  {icon}
                </span>
                <span className="nav-label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
