import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getTodayHabits } from "../services/trackit";
import Header from "./Header";
import Menu from "./Menu";

export default function TodayS() {
  const { token, photo } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const now = new Date();
  const weekday = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  useEffect(() => {
    getTodayHabits(token).then((res) => setHabits(res.data));
  }, []);
  return (
    <Wraper>
      <Header img={photo} />
      <Content>
        <h1>{`${
          weekday[now.getDay()]
        }, 0${now.getDate()} / 0${now.getMonth()}`}</h1>
        <h2>Nenhum Hábito concluído ainda</h2>
      </Content>
      <Menu value={66} />
    </Wraper>
  );
}

const Wraper = styled.div`
  background-color: #f2f2f2;
`;

const Content = styled.div`
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 23px;
    color: #126ba5;
    margin-left: 15px;
    padding-top: 30px;
  }
  h2 {
    font-size: 18px;
    color: #bababa;
    margin-left: 15px;
  }
`;
