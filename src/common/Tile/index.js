import { Label, TemperatureVariation, Value, Wrapper, DownArrow, UpArrow } from "./styled";
import { ReactComponent as HumidityIcon } from "./humidity.svg";
import { ReactComponent as PressureIcon } from "./barometer.svg";
import { ReactComponent as WindIcon } from "./wind.svg";
import { ReactComponent as SunriseIcon } from "./sunrise.svg";
import { ReactComponent as SunsetIcon } from "./sunset.svg";
import { ReactComponent as DaytimeIcon } from "./sand-clock.svg";
import { ReactComponent as DayIcon } from "./daySunny.svg";
import { ReactComponent as NightIcon } from "./nightCloudy.svg";

export const Tile = ({ type, value, max, min }) => {
  let icon;
  let labelText;
  let temperature = false;
  let weatherDescription = false;
  let temperatureVariation = false;

  switch (type) {
    case "weather":
      icon = <DayIcon />
      weatherDescription = true;
      break;
    case "temperatureVariation":
      temperatureVariation = true;
      break;
    case "temperature":
      temperature = true;
      labelText = "°C";
      break;
    case "humidity":
      icon = <HumidityIcon />
      labelText = "Humidity";
      break;
    case "pressure":
      icon = <PressureIcon />
      labelText = "Pressure";
      break;
    case "wind":
      icon = <WindIcon />
      labelText = "Wind";
      break;
    case "sunrise":
      icon = <SunriseIcon />
      labelText = "Sunrise";
      break;
    case "sunset":
      icon = <SunsetIcon />
      labelText = "sunset";
      break;
    case "daytime":
      icon = <DaytimeIcon />
      labelText = "Daytime";
      break;
  }
  return (
    <Wrapper temperature={temperature}>
      {temperatureVariation
        ?
        <>
          <TemperatureVariation>
            {max}°C <UpArrow />
          </TemperatureVariation>
          <TemperatureVariation>
            {min}°C <DownArrow />
          </TemperatureVariation>
        </>
        :
        <>
          {!temperature && icon}
          <Value temperature={temperature} weatherDescription={weatherDescription}>{value}</Value>
          <Label temperature={temperature}>{labelText}</Label>
        </>
      }
    </Wrapper>
  );
};