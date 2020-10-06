import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { PeeljobsService } from '../../shared/services/peeljobs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : '',
    password : ''
  };

  recruiter = {
    name : '',
    email : '',
    mobile : '',
    password : '',
    type: 'recruiter'
  };
  loginFlag = true;

  constructor(
    private auth: AuthService,
    private pjService: PeeljobsService,

  ) { }

  ngOnInit(): void {
  }

  submit (value) {
    if (value === "loginForm") {
      this.auth.authenticate(this.user);
    } else if (value === "mailForm"){
      console.log(this.recruiter)
    } else {

    }
  }

  check (value) {
    this.loginFlag = value;
  }


}
