# Queue Management System

A modern React + Vite application for queue management, built with Tailwind CSS and React Icons.

## Overview

This project is a queue management application built with the latest technologies and best practices. It provides a minimal, fast, and efficient setup for developing React applications with hot module replacement (HMR) and ESLint configuration.

## Features

- ⚡ **Vite** - Next generation frontend tooling with lightning-fast HMR
- ⚛️ **React 19** - Latest React version with improved performance
- 🎨 **Tailwind CSS** - Utility-first CSS framework with Vite integration
- 📦 **React Icons** - Comprehensive icon library for React
- ✨ **ESLint** - Code quality and style enforcement
- 🔄 **Hot Module Replacement** - Instant updates during development

## Tech Stack

### Core Dependencies
- **React** (^19.2.0) - JavaScript library for building user interfaces
- **React DOM** (^19.2.0) - React package for DOM manipulation
- **Vite** (^7.3.1) - Next generation build tool
- **Tailwind CSS** (^4.1.18) - Utility-first CSS framework
- **React Icons** (^5.5.0) - Popular icons for React applications

### Development Dependencies
- **@vitejs/plugin-react** - Official Vite plugin for React with Babel/oxc
- **ESLint** (^9.39.1) - JavaScript linter
- **React Hooks ESLint Plugin** - ESLint plugin for React Hooks
- **React Refresh** - Fast refresh plugin for React

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulmandal76/React-trial.git
   cd React-trial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` with hot module replacement enabled.

### Building

Build the application for production:
```bash
npm run build
```

The optimized build will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and style:
```bash
npm run lint
```

## Project Structure

```
React-trial/
├── src/                 # Source code directory
├── public/             # Static assets
├── index.html          # Entry HTML file
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## Configuration

### Vite Configuration
- Fast refresh enabled via `@vitejs/plugin-react`
- Optimized for React development
- See `vite.config.js` for detailed configuration

### ESLint Configuration
- Modern ESLint configuration with React best practices
- React Hooks linting rules enabled
- See `eslint.config.js` for detailed configuration

## Tailwind CSS

Tailwind CSS is configured with Vite integration for optimal performance. The configuration uses the latest Tailwind CSS 4.x with the official Vite plugin.

## React Compiler

The React Compiler is not enabled by default due to its impact on development and build performance. To enable it, refer to the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

## Best Practices

- Use React Hooks for state management
- Follow ESLint rules for consistent code style
- Leverage Tailwind CSS utility classes for styling
- Keep components small and reusable
- Use React Icons for consistent iconography

## Performance Optimization

- HMR for instant feedback during development
- Vite's optimized production builds
- Tailwind CSS tree-shaking to minimize bundle size
- Code splitting and lazy loading support

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Ensure all dependencies are installed:
```bash
npm install
```

### Build Failures
Clear the `.vite` cache and try again:
```bash
npm run build
```

## Contributing

Contributions are welcome! Please follow the project's code style and ESLint rules.

## License

This project is part of a learning exercise. Feel free to use it as a reference or starting point for your own projects.

## Resources

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [ESLint Documentation](https://eslint.org)

## Author

**Rahul Mandal** - [@rahulmandal76](https://github.com/rahulmandal76)

---

**Last Updated:** February 2026