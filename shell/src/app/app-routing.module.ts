import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
    // path: '',
    // loadChildren: () =>
      // loadRemoteModule({
      //   type: 'module',
      //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
      //   exposedModule: './Module',
      // }).then((m) => m.LayoutModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('layout/Module').then((m) => m.LaoutModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
