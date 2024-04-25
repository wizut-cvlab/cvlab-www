# Driver Fatigue Detection Documentation Site

## Introduction
Welcome to the repository for the Driver Fatigue Detection documentation site, developed using the Astro static site generator with the Starlight template. This site serves as a comprehensive resource for accessing and interacting with research data related to driver fatigue detection.

## Technology Stack
- **Astro with Starlight Template**: Used for creating documentation-centric websites.
- **Node.js**: Version 20.x is required to ensure compatibility with modern JavaScript features and Astro's build process.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Components

For detailed information on the components available and how to use them in the Starlight template, refer to the [Starlight Components Guide](https://starlight.astro.build/guides/components/).

### Custom Components

The `download.jsx` component is located in `/src/components/` and is implemented as an Astro Island. This React component is responsible for the download button functionality on the website. It includes a progress bar that visually represents the download progress, enhancing the user experience by providing immediate feedback on the status of file downloads.


### Sidebar Navigation
The sidebar navigation of the website is configured in the `/astro.config.mjs` file. This configuration relies on automatically generating links from specific directories. The order of the links is alphabetical, which is why files are prefixed with numbers to control their order.


## Deployment
After building the project, deploy by transferring the `dist/` directory to your static file server. This directory contains the production build of your site, optimized for performance and ready for deployment.

## Note
The repository does not contain the ZIP files for download due to their size.

