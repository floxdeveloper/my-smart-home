import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OpenhabRestService {
  openHABUrl = 'http://192.168.178.30:8080/';

  constructor(private http: HttpClient) { }

  get(requestUrl: string) {
    return this.http.get(this.openHABUrl + requestUrl);
  }

  post(requestUrl: string, body: string, httpOptions) {
    return this.http.post(this.openHABUrl + requestUrl, body, httpOptions);
  }

}
