import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Menu from "./Menu";
export default function HistoryS() {
  const { photo, value } = useContext(UserContext);
  return (
    <Wrapper>
      <Header img={photo} />
      <h1>Histórico</h1>
      <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      <Menu value={value} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 20px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f2f2f2;
  h1 {
    color: #126ba5;
    font-size: 23px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  h3 {
    color: #666666;
    font-size: 18px;
  }
`;
