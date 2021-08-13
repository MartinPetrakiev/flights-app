import { NgModule } from "@angular/core";
import { YesNoPipe } from "./yes-no-pipe";

@NgModule({
    declarations: [ YesNoPipe ],
    exports: [ YesNoPipe ]
  })
  export class MyPipesModule {}