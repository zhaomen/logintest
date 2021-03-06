import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { ErrorComponent } from './module/error/error.component';
import { IndexComponent } from './module/index/index.component';
import { LoginGuard } from './guards/login.guard';
import { NotfoundComponent } from './module/notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
