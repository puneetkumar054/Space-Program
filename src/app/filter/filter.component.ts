import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})

export class FilterComponent implements OnInit {

  @Output() onFilterApplied: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onFilter(filter: any): void {
    this.onFilterApplied.emit(filter);
  }

}
