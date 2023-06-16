import https from "../../services/http";
const Url = "/forecast.json";
export function GetCurrentWeather(Params, OkcB) {
   https.Get(Url, Params).then((data) => {
      OkcB(data);
   });
}
export function TempTesting() {}
