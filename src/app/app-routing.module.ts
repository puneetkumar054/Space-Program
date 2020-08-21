import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXListingComponent } from './space-xlisting/space-xlisting.component';

const routes: Routes = [

  { 
    path: '',
    component: SpaceXListingComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
