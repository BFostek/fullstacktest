import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController{
  constructor(private weatherService: WeatherService) {}
  @Get()
  getWeather(): string {
    return this.weatherService.getWeather();
  }

}

