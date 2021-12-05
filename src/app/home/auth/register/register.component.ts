import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }
  showhide:boolean=true;
  confirmPassShowHide:boolean=true;

  ngOnInit() {}
   
  passwordShow(){
    this.showhide=!this.showhide
  }
  confirmPasswordShow(){
     this.confirmPassShowHide=!this.confirmPassShowHide;
  }
}
