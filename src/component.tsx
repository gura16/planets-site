import styled from "styled-components";
import mercury from "./assets/planet-mercury.svg";
import source from "./assets/icon-source.svg";
function Component() {
  return (
    <div>
      <Datatypes>
        <Infotype>
          <Types>OVERVIEW</Types>
          <Types>STRUCTURE</Types>
          <Types>SURFACE</Types>
        </Infotype>
        <Foto src={mercury} />
        <Griddiv>
          <Name>MERCURY</Name>
          <Text>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </Text>
          <Source>
            Source : Wikipedia <img src={source} />
          </Source>
        </Griddiv>
        <Datadiv>
          <Data>
            <Datatext>ROTATION TIME</Datatext>
            <Datanumber>58.6 days</Datanumber>
          </Data>
          <Data>
            <Datatext>REVOLUTION TIME</Datatext>
            <Datanumber>58.6 days</Datanumber>
          </Data>
          <Data>
            <Datatext>RADIUS</Datatext>
            <Datanumber>58.6 days</Datanumber>
          </Data>
          <Data>
            <Datatext>AVERAGE TEMP.</Datatext>
            <Datanumber>58.6 days</Datanumber>
          </Data>
        </Datadiv>
      </Datatypes>
    </div>
  );
}
export default Component;

const Types = styled.div`
  font-family: "League Spartan", sans-serif;
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.9px;
  text-align: center;
  color: white;
  padding: 18px 0px;
  border-bottom: 4px solid #419ebb;
  @media only screen and (min-width: 768px) {
    width: 281px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 1);
    text-align: left;
    padding-left: 30px;
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
  }
`;

const Foto = styled.img`
  width: 111px;
  height: 111px;
  grid-area: foto;
  @media only screen and (min-width: 768px) {
    width: 184px;
    height: 184px;
    margin: auto;
    margin-top: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 290px;
    height: 290px;
    margin-left: 60px;
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

const Source = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  grid-area: source;
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
