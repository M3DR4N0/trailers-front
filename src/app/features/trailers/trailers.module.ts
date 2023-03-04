import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersComponent } from './trailers.component';

@NgModule({
  declarations: [
    TrailersComponent
  ],
  bootstrap: [TrailersComponent],
  imports: [
    CommonModule,
    TrailersRoutingModule
  ]
})
export class TrailersModule { }
