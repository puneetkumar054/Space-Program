import { Component, OnInit } from '@angular/core';
import { SpaceService } from './space.service';
@Component({
  selector: 'app-space-xlisting',
  templateUrl: './space-xlisting.component.html',
  styleUrls: ['./space-xlisting.component.css']
})
export class SpaceXListingComponent implements OnInit {

  spaceData;
  filters = {};
  constructor(
    private spaceService: SpaceService
  ) { }

  ngOnInit(): void {
    this.getListing();
  }

  appliedFilter(filter: any): void {

    if (filter.hasOwnProperty('launch_success')) {
      this.filters['launch_success'] = filter['launch_success'];
    }
    if (filter.hasOwnProperty('land_success')) {
      this.filters['land_success'] = filter['land_success'];
    }
    if (filter.hasOwnProperty('launch_year')) {
      this.filters['launch_year'] = filter['launch_year'];
    }
    this.getListing();
  }

  getListing() {
    console.log(this.filters);

    this.spaceService.getLisitng(this.filters)
      .subscribe(
        (response) => {
          this.spaceData = response.length != 0 ? response : null;
        },
        (error) => {
          console.log(error)
        }
      );
  }

}
