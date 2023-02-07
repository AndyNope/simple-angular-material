import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /*
    this.authService.login('KreativMedia', 'b3E!13hy').subscribe(
      response => {
        console.log(response);
      }
    );
  */
  }


  login(): void {
    // 'KreativMedia', 'b3E!13hy'
    this.authService.login(this.loginForm.value.username,
      this.loginForm.value.password,).subscribe(
        response => {
          console.log('logged in:', response);
          if(this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
          } else {
            console.log('wrong');
          }

        }
      );
    console.log(
      this.loginForm.value.username,
      this.loginForm.value.password,
    );
  }
}
