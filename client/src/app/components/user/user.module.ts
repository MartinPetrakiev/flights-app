import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LogInComponent,
    ProfileComponent,
  ],
  imports: [
    CoreModule,
    UserRoutingModule
  ]
})
export class UserModule { }
