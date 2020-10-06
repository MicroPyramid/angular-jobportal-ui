import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeeljobsService } from './peeljobs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router,
    private pjService: PeeljobsService,

  ) { }


  // tslint:disable-next-line: typedef
  authenticate(credentials) {
    this.pjService.userLogin(credentials)
      .subscribe(resp => {
        if (resp && resp.token) {
          if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('authToken', resp.token);
            localStorage.setItem('employeeId', resp.id);
            localStorage.setItem('employeeName', resp.employee_name);
            localStorage.setItem('isAuthenticated', 'true');
          }
          window.location.href = 'recruiter/job-list';
        } else if (resp.error) {
          // tslint:disable-next-line: no-string-literal
          console.log(resp['error']['errors']['__all__'][0]);

        }
      });
  }

  // tslint:disable-next-line: typedef
  isAuthenticated() {
    return localStorage.getItem('isAuthenticated');
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

