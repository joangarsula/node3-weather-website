const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9a30cf306dac8df684827718dc571336&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions} It is ${body.current.temperature} degrees out, but it feels like ${body.current.feelslike}.`
      );
    }
  });
};

module.exports = forecast;
