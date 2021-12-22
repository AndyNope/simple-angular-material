import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  profileForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.apiService.login('KreativMedia','b3E!13hy');
  }

}
