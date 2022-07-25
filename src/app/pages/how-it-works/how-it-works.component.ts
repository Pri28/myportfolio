import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/services/appservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiserviceService,
    private AppserviceService: AppserviceService,
  ) {
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [Validators.required]),
      otp: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  login() {
   // this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
      if (
        this.loginForm.get("otp")?.value === null ||
        this.loginForm.get("otp")?.value === undefined ||
        this.loginForm.get("otp")?.value === ""
      ) {
        Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, text: 'Please enter OTP', icon: 'error', });
        return;
      }
      let checkOTPdata = {
        "mobile": this.loginForm.value.mobile.toString(),
        "otp": this.loginForm.value.otp.toString()
      }
      console.log(checkOTPdata);
  
      
      this.apiService.validateOTP(checkOTPdata).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, text: res.message, icon: 'success', });

          this.AppserviceService.login(res.getUserData);
          // this.router.navigate(['/reset-password/' + this.loginForm.get("email")?.value]);
        } else {
          Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, text: res.message, icon: 'error', });
        }
      });
    }

    back(){
      this.router.navigate(['/home']);
    }
  }


