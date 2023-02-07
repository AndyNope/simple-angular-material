import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AufgabeStandaloneComponent } from './aufgabe-standalone/aufgabe-standalone.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component:  ClientsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'one', component: AufgabeStandaloneComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
