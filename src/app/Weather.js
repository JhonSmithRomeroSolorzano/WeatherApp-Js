export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "686f813fe21693656447e71c3e084170";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.city +
      "," +
      this.countryCode +
      "&appid=" +
      this.apiKey +
      "&units=metric";
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
  changeLocation(city, contryCode) {
    this.city = city;
    this.countryCode = contryCode;
  }
}
