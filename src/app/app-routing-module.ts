import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFirstSnapComponent} from "./single-first-snap/single-first-snap.component";

const routes: Routes = [
  { path: '', component : LandingPageComponent },
  { path: 'face-snaps', component : FaceSnapListComponent },
  { path: 'face-snaps/:id', component : SingleFirstSnapComponent }
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{}
