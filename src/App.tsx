import "./assets/style.css";
import Component from "./component";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";
import navfoto from "./assets/icon-hamburger.svg";
import arrow from "./assets/icon-chevron.svg";

function App() {
  const [planets, setPlanets] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButton = (index: number) => {
    setActiveButton(index);
  };
  return (
    <div>
      <GlobalStyle />
      <Header>
        <Buttondiv>
          <Planettext>THE PLANETS</Planettext>
          <Burgerbutton src={navfoto} onClick={() => setPlanets(!planets)} />
        </Buttondiv>
        <Plandiv primary={planets.toString()}>
          <Ovaldiv onClick={() => handleButton(0)}>
            <Fototext>
              <Oval color="#DEF4FC"></Oval>
              <Plan active={activeButton === 0}>MERCURY</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(1)}>
            <Fototext>
              <Oval color="#F7CC7F"></Oval>
              <Plan active={activeButton === 1}>VENUS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(2)}>
            <Fototext>
              <Oval color="#545BFE"></Oval>
              <Plan active={activeButton === 2}>EARTH</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(3)}>
            <Fototext>
              <Oval color="#FF6A45"></Oval>
              <Plan active={activeButton === 3}>MARS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(4)}>
            <Fototext>
              <Oval color="#ECAD7A"></Oval>
              <Plan active={activeButton === 4}>JUPITER</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(5)}>
            <Fototext>
              <Oval color="#FCCB6B"></Oval>
              <Plan active={activeButton === 5}>SATURN</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(6)}>
            <Fototext>
              <Oval color="#65F0D5"></Oval>
              <Plan active={activeButton === 6}>URANUS</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
          <Ovaldiv onClick={() => handleButton(7)}>
            <Fototext>
              <Oval color="#497EFA"></Oval>
              <Plan active={activeButton === 7}>NEPTUNE</Plan>
            </Fototext>
            <Arrow src={arrow} />
          </Ovaldiv>
        </Plandiv>
      </Header>

      <Component planet="1" />
    </div>
  );
}

export default App;

const Buttondiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid white;
  height: 60px;
  @media only screen and (min-width: 768px) {
    border-bottom: unset;
  }
`;

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
    font-family: "Antonio";
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -1.04px;
    text-align: left;
    width: 109px;
  }
`;

const Plan = styled.p<{ active: boolean }>`
  font-family: "League Spartan", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3px;
  color: white;
  opacity: ${(props) => (props.active ? "1" : "0.60")};
  cursor: pointer;
  @media only screen and (min-width: 768px) {
  }
`;

const Header = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Oval = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Ovaldiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #6d6b6b;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    border-bottom: unset;
    padding: unset;
  }
`;

const Arrow = styled.img`
  width: 4px;
  height: 8px;
  border: 1px;
  opacity: 0.4px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
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
const Plandiv = styled.nav<{ primary: string }>`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${fallDown} 1s ease-in-out forwards;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #070724;
  display: ${(props) => (props.primary === "true" ? "inLine" : "none")};

  @media only screen and (min-width: 768px) {
    justify-content: center;
    gap: 20px;
    animation: none;
    background-color: unset;
    flex-direction: row;
    font-family: "League Spartan", sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: left;
    position: unset;
    display: flex;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: end;
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
