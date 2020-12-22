import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false
  isSignup = false
  constructor(public firebaseService : FirebaseService, private router: Router){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true
      localStorage.setItem('currentUser', email);
      this.router.navigate(['/expenses']);
    }
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
      localStorage.setItem('currentUser', email);
      console.log(localStorage.getItem("currentUser"))
      this.router.navigate(['/expenses']);
    }

  }
  isShown: boolean = false; // hidden by default
  isHidden: boolean = true ;
  toggleShow() {
    this.isShown = !this.isShown;
    this.isHidden = ! this.isHidden;
  }
  handleLogout(){
    this.isSignedIn = false
    localStorage.removeItem('currentUser');
  }
}
