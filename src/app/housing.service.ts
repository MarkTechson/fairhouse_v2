import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // url = 'https://us-central1-fairhousexp.cloudfunctions.net/housinglocations/';
  url = 'http://127.0.0.1:5001/fairhousexp/us-central1/housinglocations/';
  getAllHousingLocations(): Promise<HousingLocation[]> {
    return fetch(this.url)
      .then(response => response.json())
      .then<HousingLocation[]>(data => {
        if (!data) return [];

        return data;
      });
  }

  getHousingLocationById(id: number): Promise<HousingLocation> {
    return fetch(`${this.url}/${id}`)
      .then(response => response.json())
      .then<HousingLocation>(data => {
        if (!data) return {};

        return data;
      });
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
  constructor() { }
}
