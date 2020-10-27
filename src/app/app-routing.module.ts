import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalesComponent } from './portales/portales.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'portales', component: PortalesComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
