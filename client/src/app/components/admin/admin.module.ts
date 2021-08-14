import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditComponent } from './edit/edit.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [
    CreateComponent,
    EditPanelComponent,
    EditComponent
  ],
  imports: [
    CoreModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
