import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {  Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService) { }

    /**
     * Check if the user is logged in. If access granted, the user can access the portal
     */
    canActivate(): Observable<boolean> {
        return this.authService.isLoggedIn().pipe(
            tap(loggedIn => {
                if (!loggedIn) {
                   // ToDo Redirection
                }
            })
        );
    }
}
