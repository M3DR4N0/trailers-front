import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailersComponent } from './components/trailers/trailers.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: 'trailers', component: TrailersComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'administrador/:id', component: AdministradorComponent},
  {path: 'trailers/:title', component: TrailersComponent},
  {path: 'contacto', component: ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
