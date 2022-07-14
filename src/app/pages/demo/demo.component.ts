import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ApiserviceService} from '../../services/apiservice.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
 

  constructor(
    // private formBuilder: FormBuilder,
    // private ApiserviceService: ApiserviceService,
    private router: Router,
    private ApiserviceService: ApiserviceService,
    // private route: ActivatedRoute
  ) {
    // this.addSuperForm = this.formBuilder.group({
    //   user_role: this.formBuilder.array([], [Validators.required])
    // });
   }

  ngOnInit(): void {
  
    };
    popupmodal(){
    console.log('HIIII');
    }

    back(){
      this.router.navigate(['/home']);
    }
}

