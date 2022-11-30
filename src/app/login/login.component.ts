import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;

  loginForm:any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginForm.value.email == '' || this.loginForm.value.email == null || this.loginForm.value.email == undefined){
      alert("Please enter email");
    }
    else if(this.loginForm.value.password == '' || this.loginForm.value.password == null || this.loginForm.value.password == undefined){
      alert("Please enter password");
    }
    else{
      alert(JSON.stringify(this.loginForm.value))
      window.location.href = "/dashboard"
    }
  }
}
