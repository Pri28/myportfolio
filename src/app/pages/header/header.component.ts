import { Component, OnInit } from '@angular/core';
import {AppserviceService} from 'src/app/services/appservice.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { interval } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private userData = JSON.parse(localStorage.getItem('userInfo') || '{}');
  public isLoggedin: boolean = false;

  constructor(
    private appserviceService: AppserviceService,
    private router: Router
  ) { 
 
  }

  ngOnInit(): void {
    interval(0).subscribe(x => {
      
    this.isLoggedin = this.appserviceService.isLoggedIn();
    console.log(this.isLoggedin);
    console.log(this.userData.role,'Priyaaaaaaaaaa');
    });
  }                                                                                                                                                                   

  // closeNavOnMenuClick() {
  //   document.getElementById("navbar-toggler")?.click();
  // }

  Logout() {
    console.log();  
    //this.closeNavOnMenuClick();
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#249081',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ toast: true, position: 'bottom-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'You have been successfully logged-out', icon: 'success', });
        this.appserviceService.logout();
      }
    });

  }

}
