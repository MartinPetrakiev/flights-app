import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './create/create.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { AuthGuardService as AuthGuard } from '../../auth/auth-guard.service';


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
        path: 'create', 
        component: CreateComponent,
        canActivate: [AuthGuard] 
      },
      {
        path: 'edit-panel', 
        component: EditPanelComponent,
        canActivate: [AuthGuard] 
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }