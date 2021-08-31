import { Label, Value, Wrapper } from "./styled";
import { ReactComponent as HumidityIcon } from "../../assets/humidity.svg";
import { ReactComponent as PressureIcon } from "../../assets/barometer.svg";
import { ReactComponent as WindIcon } from "../../assets/wind.svg";
import { ReactComponent as SunriseIcon } from "../../assets/sunrise.svg";
import { ReactComponent as SunsetIcon } from "../../assets/sunset.svg";
import { ReactComponent as DaytimeIcon } from "../../assets/sand-clock.svg";

export const Tile = ({ type, value }) => {
  let icon;
  let labelText;
  let temperature = false;

  switch (type) {
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
      {!temperature && icon}
      <Value temperature={temperature}>{value}</Value>
      <Label temperature={temperature}>{labelText}</Label>
    </Wrapper>
  );
};