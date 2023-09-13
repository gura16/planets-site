import styled from "styled-components";
import mercury from "./assets/planet-mercury.svg";
import source from "./assets/icon-source.svg";
function Component() {
  return (
    <div>
      <Infotype>
        <Types>OVERVIEW</Types>
        <Types>STRUCTURE</Types>
        <Types>SURFACE</Types>
      </Infotype>
      <Datatypes>
        <Foto src={mercury} />
        <Name>MERCURY</Name>
        <Text>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </Text>
        <Source>
          Source : Wikipedia <img src={source} />
        </Source>
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
`;

const Infotype = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
`;

const Foto = styled.img`
  width: 111px;
  height: 111px;
`;

const Datatypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const Name = styled.h2`
  font-family: "Antonio";
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
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
`;

const Source = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
`;

const Datadiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 327px;
  height: 48px;
  border: 1px;
  opacity: 0.20000000298023224px;
  border: 1px solid #6d6b6b;
`;

const Datatext = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7272727489471436px;
  text-align: left;
  color: white;
  opacity: 10px;
`;

const Datanumber = styled.p`
  font-family: "Antonio";
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-align: right;
  color: white;
`;
