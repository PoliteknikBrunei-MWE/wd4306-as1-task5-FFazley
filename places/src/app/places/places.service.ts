import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  loadedPlaces! : Place[];

  private places:Place[] = [
    new Place('p1', 'Brunei', 'The Abode of Peace', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1200px-Flag_of_Brunei.svg.png', 149.99),
    new Place('p2', 'Tutong', 'The Land of Peace', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1200px-Flag_of_Brunei.svg.png', 189.99),
    new Place('p3', 'Belait', 'The Oil Town', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/1200px-Flag_of_Brunei.svg.png', 99.99),
  ];

  constructor() { }

  get $places() {
    return [...this.places];
  }

  loadPlaces() {
    this.loadedPlaces = this.$places;
  }
}