const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    layout: 'http://localhost:4201/remoteEntry.js',
    start: 'http://localhost:4202/remoteEntry.js',
    contact: 'http://localhost:4203/remoteEntry.js',
    about: 'http://localhost:4204/remoteEntry.js',
  },
  shared: {
    // ...shareAll({
    //   singleton: true,
    //   strictVersion: true,
    //   requiredVersion: 'auto',
    // }),
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
