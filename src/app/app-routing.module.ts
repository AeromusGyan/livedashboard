import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveDashboardComponent } from './live-dashboard/live-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:LiveDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
