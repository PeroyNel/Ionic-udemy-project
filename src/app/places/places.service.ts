import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
    'p1', 
    'Manhattan Mansion', 
    'In the heart of New York City.', 
    'https://blog-www.pods.com/wp-content/uploads/2019/11/MG_NY_6_1_Manhattan.jpg', 
    149.99
    ),
    new Place(
    'p2', 
    'Eiffel Tower', 
    'The gem of Paris.', 
    'https://www.travelandleisure.com/thmb/xyyOmec2yAqPGBcN-Y2FLfFadu0=/1600x1000/filters:fill(auto,1)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg', 
    199.99),
    new Place(
      'p3', 
      'Castle Grand', 
      'A stronghold.', 
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg', 
      99.99)
  ];

  get places () {
    return [...this._places];
  }
  
  constructor() { }
}
