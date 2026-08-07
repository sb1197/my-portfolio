# Portfolio

A lightweight React portfolio built with Vite that showcases a personal profile, skills, projects, and contact details. The app is intentionally minimal and focused on a clean, responsive layout with accessible components.

## Features

- Responsive profile header with avatar and summary
- Sections for About, Skills, Projects, and Contact
- Collapsible project cards with technology tags
- Prettier + ESLint integration and Git hooks for consistent formatting

## Local development

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Format codebase

```bash
npm run format
```

4. Run lint and formatting checks

```bash
npm run check
```

Build for production:

```bash
npm run build
```

## Contributing

Contributions are welcome. Before opening a PR, make sure your changes are formatted and linted — the repository includes pre-commit hooks that automatically run Prettier on staged files.

- The GitHub Actions workflow `.github/workflows/ci.yml` runs on pushes and pull requests and performs:
	- dependency install (`npm ci`),
	- ESLint checks (`npm run lint`),
	- Prettier checks (`npm run format:check`), and
	- a production build (`npm run build`).

- To avoid CI failures, run `npm run format` and `npm run lint` locally before pushing.

If you'd like me to add contribution guidelines, testing, or more CI checks (type checking, unit tests), open an issue or a PR and I can help add them.

---

License: MIT
