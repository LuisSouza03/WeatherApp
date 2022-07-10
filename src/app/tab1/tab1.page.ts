/* eslint-disable no-debugger */
/* eslint-disable guard-for-in */
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import * as moment from 'moment';
moment.locale('pt-br');

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  city: string;
  temp: string;
  hour: any = moment().format('LT');
  photo: string;
  description: string;

  forecast: any[];
  searchsCity: any[];


  constructor(
    private weatherService: WeatherService
  ) { }

  async ngOnInit() {
    await this.getWeatherCity('Cachoeiras de Macacu');
  }

  async getWeatherCity(citySearch: string) {

    await this.weatherService.getWeather(citySearch).then((data: any) => {
      if (data) {
        this.city = data.city_name;
        this.temp = data.condition_code;
        this.description = data.description;
        if (data.currently === 'noite' && data.condition_slug === 'cloudly_night') {
          this.photo = environment.cloudSkyNight;
        }
      }
    });
  }

  async moreInfo(citySelect: string) {

    await this.weatherService.getWeather(citySelect).then((data: any) => {
      if (data.forecast) {
        debugger;
        this.forecast = data.forecast;

      }
    });

  }

}
