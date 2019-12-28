# Title

Complete Later

[Live Demo](https://pnwink.netlify.com/)

## Installation & Scripts

### `npm install`

Install the dependencies:

### `npm run build`

Production build to `/public`:

### `npm run develop`

Run the development server:

### `npm run clean`

Cleanup cache (often fixes misc errors when run before `npm run develop`):

### `npm run format`

Format js files with prettier config

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
