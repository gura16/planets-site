import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

function App() {
  const [planets, setPlanets] = useState<boolean>(false);

  return (
    <div>
      <GlobalStyle />
      <button onClick={() => setPlanets(!planets)}>the planets</button>
      {planets ? (
        <div>
          <p className="planet">MERCURY</p>
          <p className="planet">VENUS</p>
          <p className="planet">EARTH</p>
          <p className="planet">MARS</p>
          <p className="planet">JUPITER</p>
          <p className="planet">SATURN</p>
          <p className="planet">URANUS</p>
          <p className="planet">NEPTUNE</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;}`;
