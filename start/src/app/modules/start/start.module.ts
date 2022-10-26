import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, StartRoutingModule],
})
export class StartModule {}
