import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./components/filter/filter.component";
import { FilterResultComponent } from "./components/filter-result/filter-result.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { PitchesComponent } from "./components/pitches/pitches.component";
import { CoreModule } from "../core/core.module";
import { PitchCardComponent } from "./components/pitch-card/pitch-card.component";

const pitchRoutes: Routes = [
  { path: "pitches", component: PitchesComponent },
  { path: "pitches/:id/:starts/:ends", component: PitchesComponent },
  { path: "**", redirectTo: "/pitches" }
];

@NgModule({
  declarations: [
    FilterComponent,
    FilterResultComponent,
    PitchesComponent,
    PitchCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild(pitchRoutes)
  ],
  exports: [RouterModule]
})
export class PitchModule {}
