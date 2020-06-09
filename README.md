# LibCal Assets

[![CircleCI](https://circleci.com/gh/NYULibraries/libcal-assets.svg?style=svg)](https://circleci.com/gh/NYULibraries/libcal-assets)

Manage the CSS and JS for NYU Libraries' instance of SpringShare's LibCal product.

## CSS

All custom styles for LibCal start through the `scss/index.scss` entrypoint but can be split into multiple modular files if necessary thanks to webpack.

## JS

All custom Javascript fo LibCal start through the `js/index.js` entrypoint but can be split into multiple module files if necessary thanks to webpack.

## Layouts

There is no way in LibCal to host templates externally so we will just use this repository as a copy of the templating work we have to do directly in the LibCal interface. **We treat these version-controlled layouts as the canonical source even though they are not automatically synced up with the application, this means that at any time we can override the live version with the version managed here.**
