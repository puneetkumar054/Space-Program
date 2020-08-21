import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let routes = {
  listing: (filters) => "https://api.spaceXdata.com/v3/launches" + filters,
};

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  routes;
  constructor(private http: HttpClient) {
    this.routes = routes;
  }

  getLisitng(filters: any): Observable<any> {

    let filtersStr = '?limit=100'

    if (Object.entries(filters).length) {
      Object.entries(filters).forEach(
        ([key, value]) => {
          filtersStr += `&${key}=${value}`
        }
      );
    }
    return this.http.get<any>(this.routes.listing(filtersStr));
  }
}
