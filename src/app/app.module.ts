import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginationComponent } from "./core/components/pagination/pagination.component";
import { PitchModule } from "./pitch/pitch.module";

@NgModule({
  declarations: [AppComponent, PaginationComponent],
  imports: [BrowserModule, AppRoutingModule, PitchModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
