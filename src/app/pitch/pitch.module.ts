import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./components/filter/filter.component";
import { FilterResultComponent } from "./components/filter-result/filter-result.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { PitchesComponent } from "./components/pitches/pitches.component";

const pitchRoutes: Routes = [
  { path: "pitches", component: PitchesComponent },
  { path: "pitches/:pitchId/:starts/:ends", component: PitchesComponent }
];

@NgModule({
  declarations: [FilterComponent, FilterResultComponent, PitchesComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(pitchRoutes)],
  exports: [RouterModule]
})
export class PitchModule {}
