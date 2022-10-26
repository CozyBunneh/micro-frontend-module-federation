const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'layout',

  // exposes: {
  //   './Module': './src/app/modules/layout/layout.module.ts',
  // },
  exposes: {
    './Header': './src/app/modules/layout/header/header.component.ts',
    // Footer: './src/app/modules/layout/footer/footer.component.ts',
  },

  // shared: { // Only works when running via the shell
    // ...shareAll({
    //   singleton: true,
    //   strictVersion: true,
    //   requiredVersion: 'auto',
    // }),
  //},
  shared: { // If you want to run the app locally
    '@angular/core': { eager: true, singleton: true },
    '@angular/common': { eager: true, singleton: true },
    '@angular/common/http': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/router': { eager: true, singleton: true },
  },
});
