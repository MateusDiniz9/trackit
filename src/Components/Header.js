import styled from "styled-components";
export default function Header({ img }) {
  return (
    <Wraper>
      <h2>TrackIt</h2>
      <img src={img} alt="foto_perfil" />
    </Wraper>
  );
}

const Wraper = styled.div`
  background-color: #126ba5;
  color: white;
  padding: 0 10px;
  font-family: "Playball", cursive;
  font-size: 40px;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;
