export class Store {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "Pereira";
    this.defaultCountry = "co";
  }

  setLocationData(city, codeCountry) {
    localStorage.setItem("city", city);
    localStorage.setItem("codeCountry", codeCountry);
  }
  getLocationData() {
    if (localStorage.getItem("city") != null) {
      this.city = localStorage.getItem("city");
    } else {
      this.city = this.defaultCity;
    }
    if (localStorage.getItem("countryCode") != null) {
      this.countryCode = this.countryCode.getItem("countryCode");
    } else {
      this.countryCode = this.defaultCountry;
    }
    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }
}
