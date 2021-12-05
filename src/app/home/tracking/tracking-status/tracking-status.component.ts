import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
export interface modelData {
  data?: any;
}

@Component({
  selector: 'app-tracking-status',
  templateUrl: './tracking-status.component.html',
  styleUrls: ['./tracking-status.component.scss'],
})
export class TrackingStatusComponent implements OnInit {

  constructor(private modelCtrl:ModalController,private navParams:NavParams) { }
  statusDetails:any=this.navParams.get('data');
  ngOnInit() {
    console.log(this.statusDetails)
  }
  
   modalDismiss(){
     this.modelCtrl.dismiss();
   }
}
