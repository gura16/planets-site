import styled from "styled-components";
import mercury from "./assets/planet-mercury.svg";
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
  margin-top: 60px;
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
