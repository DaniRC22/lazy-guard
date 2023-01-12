import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { LoginComponent } from '../login/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'crear',component:CrearComponent},
  {path:'editar/:id',component:EditarComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
