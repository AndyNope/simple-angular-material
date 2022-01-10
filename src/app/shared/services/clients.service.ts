import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  urlApi;
  
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { 
    this.urlApi = this.sharedService.checkUrl();
  }
 client(): Observable<any> {
  return this.http.get<any>(this.urlApi + '/clients/').pipe(
    map((response: any) => {
      return response;
    })

  )

 }

  
}
