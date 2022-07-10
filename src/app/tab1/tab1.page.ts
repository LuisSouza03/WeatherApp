import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  city: string = 'São Paulo';
  temp: string = '21°';
  hour: string;
  photo: string;
  description: string;


  constructor(
    private weatherService: WeatherService
  ) {}

  async ngOnInit() {
    await this.getWeatherCity();
  }

  async getWeatherCity() {

    await this.weatherService.getWeather('São Paulo').then((data: any) => {
      if(data) {

      }
    });
  }

}
