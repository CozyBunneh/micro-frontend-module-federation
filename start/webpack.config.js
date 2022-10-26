const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'start',

  exposes: {
    './Module': './src/app/modules/start/start.module.ts',
  },

  shared: {
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
