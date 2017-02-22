const endpoint = require('../utils/endpoint');

var weatherApiRes = {
  getWeather() {
    console.log("weather api ", endpoint.weatherApi);
    return fetch(endpoint.weatherApi).then((res) => res.json()).catch(error => {
    console.log(error.message)
  });
  }
};

module.exports = weatherApiRes;
