const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'contact',

  exposes: {
    './Module': './src/app/modules/contact/contact.module.ts',
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
