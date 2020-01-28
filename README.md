# Basic Webpack development environment
## Includes
 Babel + SASS + VUE

## It does NOT Include
 For simplicity it does not include ESLint or Prettier. You cna add them yourself on top 

## Description
This basic setup can deal with js, jsx, css, scss and multiple static files (eot|svg|ttf|woff|woff2|png|jpg)

## How to install.  
Simply download or clone this project from Github.
Change directory to the location of the repository and install your npm dependencies.

### Adding LuiadRIA 2020
Before you can start you need to install the LuciadRIA 2020 api and the license.
#### LuciadRIA Core module
Install Luciad RIA using npm, you will have to addapt the local file path to match the location of your local LuciadRIA folder
```
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\ria
```
#### LuciadRIA License
Simply copy a valid LuciadRIA license file into the folder './src/license'. Make sure your license file is called 'luciadria_development.txt'

## How to use 
Simply edit the ./src/main.js to start coding. The LuciadRIA Map is integrated as a VUE component


## Scripts:

* npm run dev: Start development environment
* npm run build: Build for production
* npm run serve: Serve the production built (after succesfully executing 'npm run build')

## Key functionality

- Parses and bundle js (Javascript)  and vue (VUE)
- Development server with hot reload
- Bundle code for production
- Test server for production
- This environment can be used as starting point for web applications or libraries
- CSS/SCSS code is split from the final JS bundle for production
- Static files are served as files (not bundled)
- Easy to integrate with LuciadRIA 2020



 
 
