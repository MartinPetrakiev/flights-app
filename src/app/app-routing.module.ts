import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FlightsComponet } from "./components/flights/flights.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'flights', component: FlightsComponet },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
