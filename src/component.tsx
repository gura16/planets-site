import styled from "styled-components";
import source from "./assets/icon-source.svg";
import { useState, useEffect } from "react";

function Component(props: any) {
  const url = "https://planets-api.vercel.app/api/v1/planets";

  const [activeType, setActiveType] = useState<number>(0);

  const hanldeTypeClick = (index: number) => {
    setActiveType(index);
    getData(index);
  };

  const [planetName, setPlanetName] = useState<string>("");
  const [rotationTime, setRotationTime] = useState<string>("");
  const [revolutionTime, setRevolutionTime] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [average, setAverage] = useState<string>("");
  const [colors, setColor] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [sources, setSources] = useState<string>("");
  const [planetsImage, setPlanetsImage] = useState<string>("");
  const [planetsImage1, setPlanetImage1] = useState<string>("");
  const [planetHiddeImage, setPlanetHiddeImage] = useState<boolean>(false);

  async function getData(number: number) {
    const res = await fetch(url);
    const data = await res.json();

    setPlanetName(data[props.planet].name);
    setRotationTime(data[props.planet].rotation);
    setRevolutionTime(data[props.planet].revolution);
    setRadius(data[props.planet].radius);
    setAverage(data[props.planet].temperature);
    setColor(data[props.planet].color);

    if (number == 0) {
      setText(data[props.planet].overview.content);
      setSources(data[props.planet].overview.source);
      setPlanetsImage(data[props.planet].images.planet);
      setPlanetHiddeImage(false);
    }
    if (number == 1) {
      setText(data[props.planet].structure.content);
      setSources(data[props.planet].structure.souurce);
      setPlanetsImage(data[props.planet].images.internal);
      setPlanetHiddeImage(false);
    }
    if (number == 2) {
      setText(data[props.planet].geology.content);
      setSources(data[props.planet].geology.souurce);
      setPlanetsImage(data[props.planet].images.planet);
      setPlanetImage1(data[props.planet].images.geology);
      setPlanetHiddeImage(true);
    }
  }

  useEffect(() => {
    getData(0);
    setActiveType(0);
  }, [props.planet]);

  return (
    <div>
      <Datatypes>
        <Infotype>
          <Types
            onClick={() => hanldeTypeClick(0)}
            active2={activeType === 0}
            color={colors}
          >
            OVERVIEW
          </Types>
          <Types
            onClick={() => hanldeTypeClick(1)}
            active2={activeType === 1}
            color={colors}
          >
            STRUCTURE
          </Types>
          <Types
            onClick={() => hanldeTypeClick(2)}
            active2={activeType === 2}
            color={colors}
          >
            SURFACE
          </Types>
        </Infotype>
        <Fotodiv>
          <Foto src={planetsImage} />
          <Foto1
            src={planetsImage1}
            style={
              planetHiddeImage ? { display: "inline" } : { display: "none" }
            }
          />
        </Fotodiv>
        <Griddiv>
          <Name>{planetName}</Name>
          <Text>{text}</Text>
          <Source href={sources}>
            Source : Wikipedia <img src={source} />
          </Source>
        </Griddiv>
        <Datadiv>
          <Data>
            <Datatext>ROTATION TIME</Datatext>
            <Datanumber>{rotationTime}</Datanumber>
          </Data>
          <Data>
            <Datatext>REVOLUTION TIME</Datatext>
            <Datanumber>{revolutionTime}</Datanumber>
          </Data>
          <Data>
            <Datatext>RADIUS</Datatext>
            <Datanumber>{radius}</Datanumber>
          </Data>
          <Data>
            <Datatext>AVERAGE TEMP.</Datatext>
            <Datanumber>{average}</Datanumber>
          </Data>
        </Datadiv>
      </Datatypes>
    </div>
  );
}
export default Component;

const Types = styled.div<{ active2: any; color: string }>`
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.9px;
  text-align: center;
  color: white;
  padding: 18px 0px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active2 ? `4px solid ${props.color}` : "none"};

  @media only screen and (min-width: 768px) {
    width: 281px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    padding-left: 30px;
    background-color: ${(props) => (props.active2 ? ` ${props.color}` : "")};
  }
`;

const Infotype = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 0 20px;
  height: 50px;
  grid-area: type;

  width: 100%;
  grid-area: infotype;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 120px;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 90px;
    margin-top: -40px;
  }
`;

const Fotodiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Foto = styled.img`
  width: 111px;
  height: 111px;
  grid-area: foto;
  @media only screen and (min-width: 768px) {
    width: 184px;
    height: 184px;
    margin-left: 200px;
    margin-top: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 290px;
    height: 290px;
    margin-left: 60px;
  }
`;
const Foto1 = styled.img`
  width: 129px;
  height: 129px;
  position: absolute;
  top: 90px;
  left: 0px;
  @media only screen and (min-width: 768px) {
    top: 280px;
    left: 240px;
  }
  @media only screen and (min-width: 1024px) {
    top: 380px;
    left: 170px;
  }
`;

const Griddiv = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  @media only screen and (min-width: 768px) {
    align-items: start;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 240px;
    margin-top: -50px;
  }
`;

const Datatypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "foto foto"
      "information infotype"
      "datainfo datainfo";
  }
  @media only screen and (min-width: 1024px) {
    grid-template-areas:
      "foto information"
      "foto infotype"
      "datainfo datainfo";
  }
`;

const Name = styled.h2`
  font-family: "Antonio";
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  grid-area: name;
  margin-top: 50px;
`;

const Text = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  width: 327px;
  height: 110px;
  grid-area: Text;
  @media only screen and (min-width: 768px) {
    font-family: "Spartan";
    font-size: 11px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Source = styled.a`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  grid-area: source;
  cursor: pointer;
`;

const Datadiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: datainfo;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 100px;
  }
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 327px;
  height: 48px;
  border: 1px;
  opacity: 0.2px;
  border: 1px solid #969595;
  @media only screen and (min-width: 768px) {
    width: 164px;
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
  }
  @media only screen and (min-width: 1024px) {
    width: 225px;
    height: 128px;
  }
`;

const Datatext = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7px;
  text-align: left;
  color: white;
  @media only screen and (min-width: 1024px) {
    font-family: "League Spartan", sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-align: left;
  }
`;

const Datanumber = styled.p`
  font-family: "Antonio";
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-align: right;
  color: white;
  @media only screen and (min-width: 1024px) {
    font-family: "Antonio";
    font-size: 40px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: -1.5px;
    text-align: left;
  }
`;
