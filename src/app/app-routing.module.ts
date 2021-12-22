import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'table', component:  TablesComponent},
  { path: 'charts', component:  ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
