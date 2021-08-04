import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
;
import { AppComponent } from './app.component';
import { FlightsComponet } from './components/flights/flights.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponet,
    AdminComponent,
    EditPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
