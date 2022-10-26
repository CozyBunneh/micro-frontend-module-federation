import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentLoaderService } from './core/component-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header', { read: ViewContainerRef, static: true })
  headerContainer!: ViewContainerRef;

  constructor(private componentLoader: ComponentLoaderService) {
    this.componentLoader.init();
  }

  ngAfterViewInit() {
    this.loadHeaderComponent();
  }

  private async loadHeaderComponent() {
    let headerComponent = await this.componentLoader.loadRemoteComponentByName(
      'Header'
    );
    if (headerComponent) {
      this.headerContainer.createComponent(headerComponent);
    }
  }
}
