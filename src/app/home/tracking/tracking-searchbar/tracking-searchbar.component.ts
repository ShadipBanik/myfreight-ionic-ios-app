import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/service/loader.service';
import { ToastService } from 'src/app/service/toast.service';
import { TrackingStatusComponent,modelData } from '../tracking-status/tracking-status.component';

@Component({
  selector: 'app-tracking-searchbar',
  templateUrl: './tracking-searchbar.component.html',
  styleUrls: ['./tracking-searchbar.component.scss'],
})
export class TrackingSearchbarComponent implements OnInit {

  constructor(private modelCtrl:ModalController,private toast:ToastService,private loader:LoaderService) { }

  ngOnInit() {}
  async submitForm(data){
     const modal = await this.modelCtrl.create({
       component:TrackingStatusComponent,
       componentProps:{
         data:data
       }
       
     })

     return await modal.present()
  }
  toastShow(){
     this.loader.presentLoading()
  }
}
