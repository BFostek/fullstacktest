import { WeatherList } from './weatherList.dto';

export class WeatherDTO {
  cod: number;
  message: string;
  cnt: number;
  list: WeatherList[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

// Path: src/weather/dto/weatherListDTO.ts
