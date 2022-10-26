export const environment = {
  production: true,

  microfrontends: [
    {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'layout',
      components: [
        {
          exposedModule: './Header',
          displayName: 'Header',
          componentName: 'HeaderComponent',
        },
      ],
    },
  ],
};
