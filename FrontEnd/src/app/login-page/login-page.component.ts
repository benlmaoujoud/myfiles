import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { LoginFormClass } from '../LoginFormClass';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { RouterService } from '../services/router.service';
import {GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  name:string="";
  pass:string="";

  successMessage:string ="";
  errMessage: string ="";

  loginFormClass: LoginFormClass = new LoginFormClass();
  constructor(private authenticateService: AuthenticationServiceService, private routerService:RouterService,private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  
  loginForm=new FormGroup({
    
    emailid:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  get emailid(){
    return this.loginForm.get('emailid');
  }

  get password(){
    return this.loginForm.get('password');
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  login(){
    this.routerService.routeToDashboard();


    this.loginFormClass.username=this.emailid?.value;

    this.loginFormClass.password=this.password?.value;


    
    if(this.loginFormClass.username=="")
    {
      this.errMessage="Email Id is required";

          if(this.loginFormClass.password=="") {
      this.errMessage="Password is required";

    
    }
    }else{
      console.log(this.loginFormClass)
            

              this.authenticateService.authenticate(this.loginFormClass).subscribe(data => {

                  localStorage.setItem('token',data.token);
                  if (localStorage.getItem('token') !== null) {
                    this.routerService.routeToDashboard();
                   
                  } else{
                    this.errMessage="Wrong Identifier ";

                }
              });
            }
        }

   }
