import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { SpaceXLaunchCardComponent } from './space-xlaunch-card/space-xlaunch-card.component';
import { SpaceXListingComponent } from './space-xlisting/space-xlisting.component';
// import { SpaceService } from './space-xlisting/space.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SpaceXLaunchCardComponent,
    SpaceXListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
