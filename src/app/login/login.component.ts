import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  reactiveForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });;
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {    
    this.authService.login('KreativMedia', 'b3E!13hy').subscribe(
      response => {
        console.log(response);
      }
    );
  }


  login():void{
    console.log(
      this.reactiveForm.value.username, 
      this.reactiveForm.value.password, 
    );
  }
}
