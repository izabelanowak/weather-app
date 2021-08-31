import { Container } from "./common/Container";
import { Tile } from "./common/Tile";

function App() {
  return (
    <Container>
      <Tile
        type="weather"
        value="Sunny"
      />
      <Tile
        type="temperature"
        value="33"
      />
      <Tile
        type="temperatureVariation"
        max="35"
        min="27"

      />
      <Tile
        type="humidity"
        value="49%"
      />
      <Tile
        type="pressure"
        value="1,009mBar"
      />
      <Tile
        type="wind"
        value="11km/h"
      />
      <Tile
        type="sunrise"
        value="6:03 AM"
      />
      <Tile
        type="sunset"
        value="7:05 PM"
      />
      <Tile
        type="daytime"
        value="13h 1m"
      />
    </Container>
  );
}

export default App;
