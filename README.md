# mifro-frontend-module-federation 🏳️‍⚧️🏳️‍🌈

🏳️‍⚧️🏳️‍🌈 Micro frontend Angular example using Module Federation 🏳️‍⚧️🏳️‍🌈

## Howto

### Shell

```sh
ng new shell
cd shell
npm i @angular-architects/module-federation --type host
npm i --save-dev ngx-build-plus
```

Then the correct changes has to be made to a lot of files but these are the most important ones:

- webpack.config.js (needs to be added)
- webpack.prod.config.js (needs to be added)
- angular.json

### Layout

```sh
ng new layout
cd layout
npm i @angular-architects/module-federation --type remote
npm i --save-dev ngx-build-plus
```

Then the correct changes has to be made to a lot of files but these are the most important ones:

- webpack.config.js (needs to be added)
- webpack.prod.config.js (needs to be added)
- angular.json
