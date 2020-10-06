import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient,

  ) { }

  format_response(response) {
    if (!response) {
      return;
    }
    if ('success' in response) {
      if (response['success']) {
        return response['data'] || response;
      } else {
        if ('error' in response) {
          return response['error'] || response;
        }
      }
    }
    return response;
  }

  getAll(url, headers = {}) {
    return this.httpClient.get(url, { headers: headers }).pipe(
      map(response => this.format_response(response)),
      catchError(this.handleError));
  }

  get(url, params, headers = {}) {
    return this.httpClient.get(url, { params, headers: headers }).pipe(
      map(response => this.format_response(response)),
      catchError(this.handleError));
  }

  create(url, resource, headers = {}) {
    return this.httpClient.post(url, resource, { headers: headers }).pipe(
      map(response => this.format_response(response)),
      catchError(this.handleError));
  }

  update(url, resource, headers = {}) {
    return this.httpClient.put(url, resource, { headers: headers }).pipe(
      map(response => this.format_response(response)),
      catchError(this.handleError));
  }

  delete(url, headers = {}) {
    return this.httpClient.delete(url, { headers: headers }).pipe(
      map(response => this.format_response(response)),
      catchError(this.handleError));
  }

  private handleError(error: Response) {
    return Promise.resolve(error);
  }
}
