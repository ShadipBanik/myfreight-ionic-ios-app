import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePage } from './home.page';
import { TrackingSearchbarComponent } from './tracking/tracking-searchbar/tracking-searchbar.component';
import { TrackingStatusComponent } from './tracking/tracking-status/tracking-status.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {path:'', component:LoginComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'forget-password', component:ForgetPasswordComponent},
      {path:'tracking', component:TrackingSearchbarComponent},
      {path:'tracking/:id' , component:TrackingStatusComponent},
      {path:'',redirectTo:'login', pathMatch: 'full'}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
