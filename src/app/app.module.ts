import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { FlightsComponet } from './components/flights/flights.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogInComponent } from './components/user/log-in/log-in.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdminModule } from './components/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FlightsComponet,
    AdminComponent,
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
