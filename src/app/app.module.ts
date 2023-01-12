import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './formulario/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    RouterModule,
    PagesModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
