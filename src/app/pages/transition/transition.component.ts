import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/services/appservice.service'; 

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'], 
})
export class TransitionComponent implements OnInit {
  
  constructor(
    private router: Router,
    private appserviceService: AppserviceService,
  ) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/home']);
  }
}

