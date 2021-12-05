import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { environment } from '../../environments/environment';
import { ToastService } from './toast.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({"Content-Type": "application/json", 'Content': 'application/json','Access-Control-Allow-Origin': '*'});
  constructor(private http:HttpClient, private loading:LoaderService , private toaster:ToastService) { }
  setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocal(key): any {
    return JSON.parse(localStorage.getItem(key));
  }
  setHeaders(json) {
    let header = {'Content-Type': 'application/json', 'Content': 'application/json','Access-Control-Allow-Origin': '*'}
    Object.assign(header, json)
    this.headers = new HttpHeaders(header)
  }
   api(method, controller, data = {}, frm = {}, proxy = false, fetch = 0): any {
    this.loading.presentLoading();
    let host = environment.host;
    let token = this.getLocal("auth_token");
    if (token){
      this.setHeaders({'Authorization': 'Bearer ' + token});
      console.log(this.headers);
    }
    if (method == "put"){
      host = environment.proxy;
    }
    return new Promise((resolve, reject) => {
      this.http.request(method, host + controller, {body: data, headers: this.headers}).toPromise().then((response) => {
        this.loading.dismissLoading();
        resolve({response});
      }).catch((err) => {
        this.loading.dismissLoading();
        if(err.status==0){
            this.toaster.presentToast('No internet connection','dark')
        }
        console.log(err)
        reject(err)
      });
    });
  }

}
