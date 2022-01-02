import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SharedService } from './shared.service';

const LOGGED_IN_KEY = 'userLoggedIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlApi: string;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) {
    this.urlApi = this.sharedService.checkUrl();
  }

  /**
   * Log out the user
   * @param body (logout)
   */
  logout(): Observable<any> {
    this.clearSession();
    return this.http.post<any>(this.urlApi + '/logout/', {}).pipe(
      map((response: any) => {
        this.clearSession();
        return response;
      }), catchError((err) => {
        return throwError(err);
      })
    );
  }

  /**
   * Login
   * @param user (user)
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlApi + '/login/', { username, password }).pipe(
      map((response: any) => {
        return response;
      }), catchError((err) => {
        return throwError(err);
      })
    );
  }

  /**
   * Clear the session
   */
  clearSession(): void {
    // Remove the key added in user : userLoggedIn
    sessionStorage.removeItem(LOGGED_IN_KEY);
    sessionStorage.clear();
  }
}
