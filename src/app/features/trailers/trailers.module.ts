import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersComponent } from './components/trailers/trailers.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    TrailersComponent,
    SearchComponent
  ],
  bootstrap: [TrailersComponent],
  imports: [
    CommonModule,
    TrailersRoutingModule
  ]
})
export class TrailersModule { }
