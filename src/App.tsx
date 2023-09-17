import "./assets/style.css";
import Component from "./component";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import navfoto from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";

function App() {
  const [planets, setPlanets] = useState<boolean | null>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hidePlandiv = screenWidth >= 768;

  return (
    <div>
      <GlobalStyle />
      <Header>
        <Planettext>THE PLANETS</Planettext>
        <Burgerbutton src={navfoto} onClick={() => setPlanets(!planets)} />
      </Header>
      {planets ? (
        <Plandiv style={{ display: hidePlandiv ? "none" : "block" }}>
          <Ovaldiv>
            <Fototext>
              <Oval color="#DEF4FC"></Oval>
              <Plan>MERCURY</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#F7CC7F"></Oval>
              <Plan>VENUS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#545BFE"></Oval>
              <Plan>EARTH</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#FF6A45"></Oval>
              <Plan>MARS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#ECAD7A"></Oval>
              <Plan>JUPITER</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#FCCB6B"></Oval>
              <Plan>SATURN</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#65F0D5"></Oval>
              <Plan>URANUS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv>
            <Fototext>
              <Oval color="#497EFA"></Oval>
              <Plan>NEPTUNE</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
        </Plandiv>
      ) : null}
      {hidePlandiv && planets && <Component />}
    </div>
  );
}

export default App;

const Burgerbutton = styled.img`
  width: 24px;
  height: 17px;
  opacity: 0.24px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Planettext = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.04px;
  text-align: left;
  color: white;
  @media only screen and (min-width: 768px) {
    margin: auto;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 15px;
  }
`;

const Plan = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  background-color: #070724;
`;

const Oval = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Ovaldiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #6d6b6b;
  padding-right: 10px;
`;

const Arrow = styled.img`
  width: 4px;
  height: 8px;
  border: 1px;
  opacity: 0.4px;
`;

const Fototext = styled.div`
  display: flex;
  gap: 20px;
`;

const fallDown = keyframes`
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const Plandiv = styled.nav`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${fallDown} 1s ease-in-out forwards;
  position: absolute;
  width: 100%;
  z-index: -1;

  @media only screen and (min-width: 768px) {
  }
`;

const moveBackground = keyframes`
    0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }`;

const GlobalStyle = createGlobalStyle`*{
  body{ background-color: #070724;
    animation: ${moveBackground} 10s Linear infinite;}
  margin: 0;
  padding: 0;
  box-sizing: border-box;}`;
