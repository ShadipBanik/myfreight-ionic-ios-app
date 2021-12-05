import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private appServices:ApiService , private router: Router,private toaster:ToastService) { }
  showhide:boolean=true;
  ngOnInit() {}
  passwordShow(){
    this.showhide=!this.showhide
  }

  loginUser(data){
    console.log(data)
    this.appServices.api('post', 'authenticate', data, ).then((obj) => {
      let res = obj.response;
      console.log(res);
      this.appServices.setLocal("auth_token",res.jwttoken);
      this.appServices.api('get','user/get-by-username/'+encodeURIComponent(data.username),{},{notify:false})
      .then((object) =>{
        let res1 = object.response;
        console.log(res1);
        this.appServices.setLocal("name",res1.username);
        this.appServices.setLocal("role",res1.roles[0].name);
        this.router.navigate(['/main/profile/'+res1.username]);
  
      })
    }).catch((err) =>{
      console.log(err);
      if(err.status==500){
        data.username=data.password=undefined;
         this.toaster.presentToast('Invalid credentials','danger ');
      }
    });
  }
}
