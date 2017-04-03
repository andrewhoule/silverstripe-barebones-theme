Barebones Silverstripe HTML/PostCSS/Webpack Tooling Base
====================

## Author
* Andrew Houle
* http://andrewhoule.me

## About
This is a bare essentials HTML/PostCSS/Webpack tooling base. It's meant as a starter kit, and a base to your tooling workflow, but not a full fledged theme. It has some base styles and functionality that are relevant to a Silverstripe site. It includes webpack configuration tasks for PostCSS, SVG sprites, babel, and browsersync.

## Installation
* Download and add to your theme folder. Then rename and point to the new theme.
* If not already setup on globally on your local machine, then setup Node (https://nodejs.org/en/) and NPM (https://www.npmjs.com/). Run 'npm install' at the command line of the theme directory to add all the necessary packages.
* Go into webpack.config.babel.js and update the fonts and local server info.
* Run 'npm start' at the command line to watch with webpack and to open a testing server.
* Hook up to bundle.js via SS requirements or in templates.
