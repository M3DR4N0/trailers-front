import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TrailersService } from '../core/services/trailers.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [TrailersService]
})
export class SharedModule { }
