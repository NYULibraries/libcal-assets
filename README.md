# LibCal Assets

[![CircleCI](https://circleci.com/gh/NYULibraries/libcal-assets.svg?style=svg)](https://circleci.com/gh/NYULibraries/libcal-assets)

Manage the CSS and JS for NYU Libraries' instance of SpringShare's LibCal product:
[Library Classes & Workshops](https://nyu.libcal.com/)

## CSS

All custom styles for LibCal start through the `scss/index.scss` entrypoint but can be split into multiple modular files if necessary thanks to webpack.

## JS

All custom Javascript fo LibCal start through the `js/index.js` entrypoint but can be split into multiple module files if necessary thanks to webpack.

## Layouts

There is no way in LibCal to host templates externally so we will just use this repository as a copy of the templating work we have to do directly in the LibCal interface. **We treat these version-controlled layouts as the canonical source even though they are not automatically synced up with the application, this means that at any time we can override the live version with the version managed here.**

## Developing locally

Using an nginx proxy we can develop our styles and JS locally in realtime. To bring up the local proxy do the following:

```
docker-compose run compile
docker-compose up dev
# Visit localhost:8080
```

Because webpack is watching changes on the `js/index.js` and `scss/index.scss` you can develop in real time and see the changes immediately reflected at localhost:8080.

### Changing absolute paths to localhost

Using the [nginx sub_filter module](http://nginx.org/en/docs/http/ngx_http_sub_module.html) we can change the absolute links to local links and the external CDN links to the locally hosted asset files. **Note this doesn't work for all of the on-the-fly generated Javascript** and occasionally while browing the site you'll get sent to a `https://localhost:8080` which will not resolve because we don't serve SSL locally.
