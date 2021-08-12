import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { AuthGuardService as AuthGuard } from '../../shared/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/log-in'
      },
      {
        path: 'log-in', component: LogInComponent
      },
      {
        path: 'register', component: RegisterComponent,
      },
      {
        path: 'profile', component: ProfileComponent,
        canActivate: [AuthGuard] 
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
