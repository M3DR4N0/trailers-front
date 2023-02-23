import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailersComponent } from '../features/trailers/components/trailers/trailers.component';

const routes: Routes = [{ path: '', component: TrailersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
