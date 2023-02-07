import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SharedService } from './shared.service';

const LOGGED_IN_KEY = 'userLoggedIn';

const user = {
  id: "59",
  username: "KreativMedia",
  email: "support@kreativmedia.ch",
  role: "33",
  created: "2021-12-20 02:03:59"
};

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
        sessionStorage.setItem(LOGGED_IN_KEY, true.toString());

        return response;

      }), catchError((err) => {
        sessionStorage.setItem(LOGGED_IN_KEY, false.toString())

        return throwError(err);
      })
    );
  }

  /**
   * Check if logged in
   * @returns (boolean)
   */
  isLoggedIn(): Observable<boolean> {
    // TODO: Not secure should use /session
    console.log(sessionStorage.getItem(LOGGED_IN_KEY));
    if (sessionStorage.getItem(LOGGED_IN_KEY) !== undefined && sessionStorage.getItem(LOGGED_IN_KEY) !== null) {
      return of(true);
    }
    return of(false);
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
