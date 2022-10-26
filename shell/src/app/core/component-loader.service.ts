import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

type RemoteComponentOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};

@Injectable({
  providedIn: 'root',
})
export class ComponentLoaderService {
  private components: RemoteComponentOptions[] = [];

  init() {
    this.readAllComponentsDefinedInEnvironment();
  }

  async loadRemoteComponentByName(componentName: string): Promise<any> {
    let options = this.getComponentOptionsByName(componentName);
    if (options) {
      return await loadRemoteModule(options).then((module) =>
        options ? module[options.componentName] : null
      );
    }
    return null;
  }

  private readAllComponentsDefinedInEnvironment() {
    if (environment.microfrontends) {
      for (let microfrontend of environment.microfrontends) {
        if (!microfrontend.components) {
          continue;
        }

        for (let component of microfrontend.components) {
          this.components.push({
            type: 'module',
            remoteEntry: microfrontend.remoteEntry,
            exposedModule: component.exposedModule,
            displayName: component.displayName,
            componentName: component.componentName,
          } as RemoteComponentOptions);
        }
      }
    }
  }

  private getComponentOptionsByName(
    name: string
  ): RemoteComponentOptions | undefined {
    return this.components.find((c) => c.displayName === name);
  }
}
