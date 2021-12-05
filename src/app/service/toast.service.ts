import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast:ToastController) { }
 
  async presentToast(message,color) {
    const toast = await this.toast.create({
      message: message,
      color:color,
      mode:'ios',
      position:'bottom',
      duration: 4000,
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role:'cancel',
          handler: () => {
            console.log('close clicked');
          }
        }
      ]
    });
    await toast.present();
    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
