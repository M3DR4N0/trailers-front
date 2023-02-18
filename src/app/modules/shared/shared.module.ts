import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TrailersComponent } from './components/trailers/trailers.component';
import { TrailersService } from '../core/services/trailers.service';

@NgModule({
  declarations: [
    TrailersComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [TrailersComponent],
  providers: [TrailersService]
})
export class SharedModule { }
