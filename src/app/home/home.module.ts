import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { TrackingSearchbarComponent } from './tracking/tracking-searchbar/tracking-searchbar.component';
import { TrackingStatusComponent } from './tracking/tracking-status/tracking-status.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    TrackingSearchbarComponent,
    TrackingStatusComponent
  ],
  entryComponents:[TrackingStatusComponent]
})
export class HomePageModule {}
