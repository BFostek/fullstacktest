import { Injectable } from '@nestjs/common';
import { WeatherQueryParam } from '../dto/weather-query-param.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { WeatherDTO } from '../dto/weather.dto';

@Injectable()
export class ExternalApiService {
  readonly externalApiKey = this.configService.get<string>(
    'OPEN_WEATHER_API_KEY',
  );
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }
  private createForecastUrl(cityData: WeatherQueryParam): string {
    const { lat, lon } = cityData;
    console.log(lat, lon)
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.externalApiKey}`;
  }
  private createCurrentWeatherUrl(cityData: WeatherQueryParam): string {
    const { lat, lon } = cityData;
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.externalApiKey}`;
  }
  async getWeather(cityData: WeatherQueryParam): Promise<WeatherDTO> {
    try {
      const [forecast, currentWeather] = await Promise.all([this.httpService.axiosRef.get(
        this.createForecastUrl(cityData),
      ),
      this.httpService.axiosRef.get(
        this.createCurrentWeatherUrl(cityData),
      ),
      ]);
      forecast.data.city.coord.lat = cityData.lat
      forecast.data.city.coord.lon = cityData.lon
      return forecast.data;
    } catch (error) {
      throw error;
    }
  }
}
