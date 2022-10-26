import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    SideNavComponent
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
