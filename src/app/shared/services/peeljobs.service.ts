import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PeeljobsService extends DataService {

  baseApiURL: string = environment.backendAPI;

  constructor(
    https: HttpClient,
  ) { super(https); }


  // tslint:disable-next-line: typedef
  userLogin(data) {
    const url = this.baseApiURL + 'api-recruiter/login/';
    return this.create(
      url, data
    );
  }
}
