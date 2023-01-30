import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  urlApiLocal = 'https://api.andynope.com';

  quotes = [];

  constructor(private http: HttpClient) { }

  /**
   * Check the URL of the website to know which URL API we need to use
   */
  checkUrl(): string {
    if (window.location.hostname === 'localhost') {
      return this.urlApiLocal;
    }
    return '';
  }

  /**
   * Check the URL of the website to know which URL API we need to use
   */
  getQuotes(): Observable<any> {
    // if (this.quotes.length < 1) {
      return this.http.get('https://type.fit/api/quotes').pipe(
        (response: any) => {
          return response;
        }
      );
    // } else {
    //   return of(this.quotes);
    // }
  }
}