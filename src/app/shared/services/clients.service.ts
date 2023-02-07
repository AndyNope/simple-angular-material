import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    // if (this.quotes.length < 1) {
      return this.http.get('https://api.andynope.com/clients2/').pipe(
        (response: any) => {
          return response;
        }
      );
    // } else {
    //   return of(this.quotes);
    // }
  }
}
