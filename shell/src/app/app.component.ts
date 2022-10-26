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
  @ViewChild('footer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;
  @ViewChild('sidenav', { read: ViewContainerRef, static: true })
  sidenavContainer!: ViewContainerRef;

  constructor(private componentLoader: ComponentLoaderService) {
    this.componentLoader.init();
  }

  ngAfterViewInit() {
    this.loadHeaderComponent();
    this.loadFooterComponent();
    this.loadSideNavComponent();
  }

  private async loadHeaderComponent() {
    let headerComponent = await this.componentLoader.loadRemoteComponentByName(
      'Header'
    );
    if (headerComponent) {
      this.headerContainer.createComponent(headerComponent);
    }
  }

  private async loadFooterComponent() {
    let footerComponent = await this.componentLoader.loadRemoteComponentByName(
      'Footer'
    );
    if (footerComponent) {
      this.footerContainer.createComponent(footerComponent);
    }
  }

  private async loadSideNavComponent() {
    let sidenavComponent = await this.componentLoader.loadRemoteComponentByName(
      'SideNav'
    );
    if (sidenavComponent) {
      this.sidenavContainer.createComponent(sidenavComponent);
    }
  }
}
