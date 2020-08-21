import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-xlaunch-card',
  templateUrl: './space-xlaunch-card.component.html',
  styles: [
  ]
})
export class SpaceXLaunchCardComponent implements OnInit {
  @Input() spaceData;

  constructor() { }

  ngOnInit(): void {
    
  }

}
