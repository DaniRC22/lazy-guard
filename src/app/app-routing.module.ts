import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { NavmenuComponent } from './layouts/navmenu/navmenu.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
{path: '',component:NavmenuComponent},
{path: 'home',component:HomeComponent,
canActivate:[AuthGuard]},
{path: 'login',component: LoginComponent,
loadChildren: () => import('./login/login.module').then((module) => module.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
