import { Label, Value, Wrapper } from "./styled";
import { ReactComponent as HumidityIcon } from "../../assets/humidity.svg";

export const Tile = ({ type, value }) => {
  let icon;
  let labelText;
  
  switch (type) {
    case "humidity":
      icon = <HumidityIcon />
      labelText = "Humidity";
  }
  return (
    <Wrapper>
      {icon}
      <Value>{value}</Value>
      <Label>{labelText}</Label>
    </Wrapper>
  );
};