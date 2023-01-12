import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NavmenuComponent } from '../layouts/navmenu/navmenu.component';
import { navmenu } from '../layouts/navmenu/navmenu.module';


@NgModule({
  declarations: [
    HomeComponent,
    CrearComponent,
    EditarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    navmenu
  ],
  exports:[
    HomeComponent,
    CrearComponent,
    EditarComponent
  ]
})
export class PagesModule { }
