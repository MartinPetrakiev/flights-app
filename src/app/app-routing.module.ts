import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponet } from "./components/flights/flights.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: 'flights', component: FlightsComponet },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
