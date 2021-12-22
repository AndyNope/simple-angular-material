import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  api_base = "https://api.andynope.com/"


  getClients() {
    return this.http.get(this.api_base + "clients/")
  }

  login(username: string, pass: string) {
    return this.http.post(
      this.api_base + "login/",
      {
        username: username,
        password: pass
      }
    ).pipe(
      map(response => {
        return response;
      }));
  }

  logout() {
    return this.http.post(this.api_base + "logout/", {})
  }

  getSession(): Observable<any> {
    return this.http.get(this.api_base + "session/").pipe(
      map(response => {
        return response;
      })
    );
  }

  getPaginator(pageSize: number, pageIndex: number) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params.set('pageSize', pageSize.toString())
    params.set('pageIndex', pageIndex.toString())

    return this.http.get(this.api_base + "paginator", { headers: headers, params: params })
  }
}
