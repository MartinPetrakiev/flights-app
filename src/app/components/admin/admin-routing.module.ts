import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './create/create.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/create'
      },
      {
        path: 'create', component: CreateComponent
      },
      {
        path: 'edit-panel', component: EditPanelComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
