import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FlightsComponet } from "./components/flights/flights.component";
import { LogInComponent } from './components/user/log-in/log-in.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'flights', component: FlightsComponet },
  { path: 'log-in', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
