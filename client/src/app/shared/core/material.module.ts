import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  exports: [
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
