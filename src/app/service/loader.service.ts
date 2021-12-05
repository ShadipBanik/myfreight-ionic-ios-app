import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading:boolean=false
  constructor(private loader:LoadingController) { }

  async presentLoading() {
    this.isLoading=true;
    return await this.loader.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });;
  }
 async dismissLoading(){
   this.isLoading = false;
    return await this.loader.dismiss().then(() => console.log('dismissed'))
  }
}
