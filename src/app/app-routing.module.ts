import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { NavmenuComponent } from './layouts/navmenu/navmenu.component';
import { AuthGuard } from './guard/auth.guard';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
{path: '',component:NavmenuComponent,
canActivate:[AuthGuard]},
// {path: 'home',component:HomeComponent, 
// canActivate:[AuthGuard]},
// {path: 'login',component: LoginComponent,
// loadChildren: () => import('./login/login.module').then((module) => module.LoginModule)}
// ];
{path: 'login',component: LoginComponent},
  {
    path: 'home', 
    loadChildren: () => import('./pages/pages.module').then((module) => module.PagesModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  // },
];@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
