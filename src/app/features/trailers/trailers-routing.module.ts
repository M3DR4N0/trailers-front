import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TrailersComponent } from './components/trailers/trailers.component';

const routes: Routes = [
  {path: '', component: TrailersComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class TrailersRoutingModule { }
