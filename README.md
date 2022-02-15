# Gulp Starter Kit
A starter kit for web development based on Bootstrap 5.1.3 with Gulp JS, Sass and Pug.
It also includes file (css, js, image) compressing, minifying, concatenation and icon-font (svg to woff) generation plugins.

## Installation
```
// 1 Clone this repo
git clone https://github.com/yucelsen/gulp-starter-kit.git

// 2 Into the repo directory
cd gulp-starter-kit

// 3 Install dependency
npm install

// 4 Get started
npm run init
npm run serve
```

## Requirements
[Node JS](https://nodejs.org/en/), npm (installed with Node JS) and [Gulp CLI](https://gulpjs.com/) globally must be installed to use this starter kit.
```
// Install gulp globally
npm install -g gulp
```

## Customize Bootstrap
If you want to customize Bootstrap, define your own variables and variables using [Bootstrap Utility API](https://getbootstrap.com/docs/5.1/utilities/api/).

```
./resources/assets/scss/bootstrap-custom/_bootstrap.scss // Customize import files
./resources/assets/scss/bootstrap-custom/_bootstrap-var.scss
./resources/assets/scss/bootstrap-custom/_bootstrap-utils.scss
``` 

## Generate components or files with CLI
It is used to create component based scss/pug files, pug page templates and javascript files.
Component based files make it easy for you to implement the bem methodology and atomic design system approach.
Don't forget to include the generated scss files in main.scss

E.g File Structure

```
|-- resources
    |-- assets
        |-- components
            |-- search-box
                |-- search-box.pug
                |-- search-box.scss
                |-- search-box.js
            |-- nav-menu
                |-- nav-menu.pug
                |-- nav-menu.scss
``` 

```
// E.g: Generate a component files named search-box with .js file

gulp generate --type component --name search-box --js
```

#### type Parameters
- **components**: generate a components file in ./resources/assets/components folder
- **page**: generate a page template in ./resources/assets/pug folder
- **js**: generate a .js file template in ./resources/assets/js folder
#### js Parameters
This parameter is optionally. When generating components, it also generating .js file

## Virtual Host
If you are using a virtual server in your projects, change the url key so that browsersync can be used.

```
./resources/gulp/config.js:10

{
    url: 'gulp-starter-kit.local',
}
```
