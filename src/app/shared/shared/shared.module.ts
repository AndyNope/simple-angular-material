import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { ClientsService } from '../services/clients.service';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';


export const MATERIAL_COMPONENTS = [
  MatSidenavModule,
  MatTableModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_COMPONENTS,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    MATERIAL_COMPONENTS,
  ],
  entryComponents: [
  ],
  providers: [
    ClientsService,
    SharedService,
    AuthService
  ]
})
export class SharedModule { }
