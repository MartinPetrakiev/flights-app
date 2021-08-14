import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipesModule } from '../my-pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [MaterialModule],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MyPipesModule,
    MaterialModule
  ]
})
export class CoreModule { }
