import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  private userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');
  
  constructor(
    private router: Router
  ) { console.log(this.userInfo,"userInfo"); }

  login(userData: any) {
    localStorage.setItem('userInfo', JSON.stringify(userData));
    console.log('Priyanshi'); 
    this.router.navigate(['/about-us']);
    // if (accountId?._id) {
    //   localStorage.setItem('accountInfo', JSON.stringify(accountId));
    // }
    // if (subscribeData?._id) {
    //   localStorage.setItem('subscriptionInfo', JSON.stringify(subscribeData));
    // }
    this.userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');
    // if (!this.hasSelectedLanguage()) {
    //   this.router.navigate(['/']);
    // } else {
    // }
  }
   
  logout() {
    localStorage.removeItem('userInfo');
    this.userInfo = {};
    console.log('hiii');
    
    this.router.navigate(['/login-register']);
  }

  // isLoggedIn() {
  //   return !!this.userInfo._id;
  // }

  isLoggedIn() {
    console.log(!!this.userInfo._id);
    return !!this.userInfo._id;
  }

}
