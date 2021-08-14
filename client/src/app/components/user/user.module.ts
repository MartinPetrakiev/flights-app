import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MyPipesModule } from 'src/app/shared/my-pipes.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    RegisterComponent,
    LogInComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MyPipesModule,
    MatPaginatorModule
  ]
})
export class UserModule { }
