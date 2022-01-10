import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../shared/services/clients.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {



  constructor(
    private clientService:ClientsService
  ) { }

  ngOnInit(): void {
    this.clientService.client().subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
