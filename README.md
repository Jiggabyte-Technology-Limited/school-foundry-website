# School Foundry

A modern web application for School Foundry built with React, TypeScript, and Vite. The site features responsive design, smooth navigation, and automatic deployment to GitHub Pages.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Technologies](#technologies)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install globally with `npm install -g pnpm`
- **Git** - [Download here](https://git-scm.com/)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/sewardrichard/school-foundry.git
cd school-foundry
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This command installs all dependencies for both the root workspace and the schoolfoundry app.

## Development

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
pnpm dev
```

The application will be available at `http://localhost:3000/`

### Key Features During Development

- **Hot Module Replacement (HMR)** - Changes are reflected instantly without full page reload
- **Type Checking** - TypeScript ensures type safety as you develop
- **Auto-scroll to Top** - Navigation between pages automatically scrolls to the top
- **Responsive Design** - Test on multiple screen sizes using browser DevTools

## Building

### Production Build

Create an optimized build for production:

```bash
pnpm build
```

The build output will be generated in `artifacts/schoolfoundry/dist/`

### Type Checking

Check TypeScript for type errors:

```bash
pnpm typecheck
```

## Modifying Code

### Project Structure

```
school-foundry/
├── artifacts/
│   └── schoolfoundry/              # Main React application
│       ├── src/
│       │   ├── components/         # Reusable components
│       │   │   ├── layout/        # Layout components (Header, Footer, Navigation)
│       │   │   ├── ui/            # UI components (buttons, cards, etc.)
│       │   │   └── ...
│       │   ├── pages/             # Page components (Home, About, Contact, etc.)
│       │   ├── hooks/             # Custom React hooks
│       │   ├── App.tsx            # Root component
│       │   └── main.tsx           # Application entry point
│       ├── public/                # Static assets
│       ├── vite.config.ts         # Vite configuration
│       └── tsconfig.json          # TypeScript configuration
├── lib/                            # Shared libraries
│   └── db/                        # Database utilities
├── package.json                    # Root workspace configuration
└── pnpm-workspace.yaml            # pnpm workspace definition
```

### Adding a New Page

1. Create a new component in `artifacts/schoolfoundry/src/pages/your-page.tsx`:

```typescript
export default function YourPage() {
  return (
    <div className="container">
      <h1>Your Page Title</h1>
      {/* Your content here */}
    </div>
  );
}
```

2. Import and add a route in `artifacts/schoolfoundry/src/App.tsx`:

```typescript
import YourPage from "@/pages/your-page";

// Inside the Switch component:
<Route path="/your-page" component={YourPage} />
```

3. Add navigation links in `artifacts/schoolfoundry/src/components/layout/Footer.tsx` or `Navigation.tsx`:

```typescript
<Link href="/your-page">Your Page</Link>
```

### Modifying Existing Components

1. Locate the component in `artifacts/schoolfoundry/src/components/`
2. Make your changes
3. Save the file - HMR will automatically update the browser
4. Run `pnpm typecheck` to ensure no TypeScript errors

### Styling

The project uses **Tailwind CSS** for styling. Apply styles using Tailwind utility classes:

```typescript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled content
</div>
```

For custom styles, modify the CSS in `artifacts/schoolfoundry/src/index.css`

## Deployment

### Automatic Deployment to GitHub Pages

The project automatically deploys to GitHub Pages when you push changes. Follow these steps:

### Step 1: Create a Feature Branch (Recommended)

```bash
git checkout -b feature/your-feature-name
```

### Step 2: Make Your Changes

Edit files as needed for your features or fixes.

### Step 3: Stage Your Changes

```bash
git add .
```

Or stage specific files:

```bash
git add path/to/file
```

### Step 4: Commit Your Changes

```bash
git commit -m "feat: add description of your changes"
```

**Commit Message Guidelines:**
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for styling changes
- `refactor:` for code refactoring
- `test:` for test updates

Example:
```bash
git commit -m "feat: add scroll-to-top navigation behavior"
git commit -m "fix: resolve footer link navigation issues"
```

### Step 5: Push to GitHub

Push your branch to trigger the automated deployment:

```bash
git push origin feature/your-feature-name
```

### Step 6: Create a Pull Request (Optional but Recommended)

On GitHub, you can create a pull request to review changes before merging to `main`.

### Step 7: Merge to Main (if using PR)

Once approved, merge your PR to `main` branch, which will trigger deployment.

---

**Note:** If pushing directly to `main`, your changes will be deployed immediately to GitHub Pages.

## View Live Site

After deployment completes, visit your GitHub Pages site:

```
https://sewardrichard.github.io/school-foundry/
```

Check the **Actions** tab in your GitHub repository to monitor deployment progress.

## Troubleshooting

### Issue: `pnpm: command not found`

**Solution:** Install pnpm globally
```bash
npm install -g pnpm
```

### Issue: Dependencies not installing

**Solution:** Clear cache and reinstall
```bash
pnpm store prune
pnpm install
```

### Issue: Port 3000 already in use

**Solution:** Kill the process using port 3000 or use a different port
```bash
# On Windows (in PowerShell):
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# On macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue: TypeScript errors after changes

**Solution:** Run type checking and fix errors
```bash
pnpm typecheck
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing library
- **Radix UI** - Unstyled, accessible component primitives
- **React Hook Form** - Form state management
- **React Query** - Data fetching and caching
- **GitHub Pages** - Static site hosting

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally: `pnpm dev`
3. Type check your code: `pnpm typecheck`
4. Commit with descriptive messages: `git commit -m "feat: description"`
5. Push and create a pull request: `git push origin feature/your-feature`

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on [GitHub](https://github.com/sewardrichard/school-foundry/issues)

---

**Last Updated:** 2026-05-30
