import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { listHabits } from "../services/trackit";
import Header from "./Header";
import Menu from "./Menu";
import NewHabit from "./NewHabit";

export default function HabitsS() {
  const { token } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [new1, setNew1] = useState(false);
  useEffect(() => {
    listHabits(token).then((res) => setHabits(res.data));
  }, []);

  function createNewHabit() {
    setNew1(true);
  }
  return (
    <Wraper>
      <Header />
      <Top>
        <h1>Meus Hábitos</h1>
        <button onClick={createNewHabit}>+</button>
      </Top>
      <NewHabit new1={new1} setNew1={setNew1} />
      <Menu value={66} />
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding: 0 15px;
  h1 {
    font-size: 23px;
    color: #126ba5;
  }
  button {
    border: none;
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    color: white;
    border-radius: 5px;
  }
`;
