import { Tile } from "./common/Tile";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
