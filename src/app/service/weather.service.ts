/* eslint-disable max-len */
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const KEY = environment.key;
const URLAPI = environment.urlApi;

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getWeather(city: string) {
    const citySearch = this.removeAccents(city);

    return this.httpClient.get<any>(`${URLAPI}format=json-cors&appid=${KEY}&q=${citySearch}`)
      .pipe(
        map((response: any) => response.results),
        catchError(this.errorHandler)
      ).toPromise();

  }

  removeAccents(str: string) {
    return str.normalize('NFD').replace(/[^a-zA-Zs]/g, '').toLowerCase();
  }

  async errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }
}
