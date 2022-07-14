import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
      // tslint:disable-next-line: max-line-length
      // Type:
      // 'Basic Auth',
      // Authorization: 'Basic UmFodWw6U3dhcEAxMjM0NQ== ${Username} ${Password}',
      // Username: JSON.parse(localStorage.getItem('loginUsername')),
      // Password: JSON.parse(localStorage.getItem('loginPassword'))
    })
  };
  checkOTP: string;
  apiHost: string;
  addAdminRole: string;
  addAdminLogin: string;
  addAdminList: string;


  constructor
  (private http: HttpClient) { 
    this.apiHost = environment.API_HOST;  
    this.addAdminLogin = this.apiHost + 'adminLogin';
    this.addAdminRole = this.apiHost + 'setAdminRegistration';
    this.addAdminList = this.apiHost + 'getAdminList';
    this.checkOTP=this.apiHost + 'checkotp';
  }
  
  addadmin(requestParameters:any) {
    return this.http.post(`${this.addAdminRole}`, requestParameters, {});
  }

  login(requestParameters: any) {
    console.log(this.apiHost)
    return this.http.post(`${this.addAdminLogin}`, requestParameters, {});
  }

  validateOTP(requestParameter: any) {
    return this.http.post(`${this.checkOTP}`, requestParameter, {});
  }

  getAdminList() {
    return this.http.get(`${this.addAdminList}`);
  }

}

