import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getTodayHabits, checkHabit, unCheckHabit } from "../services/trackit";
import Header from "./Header";
import Menu from "./Menu";

function Habit({ habit, index, HabitID, setHabitID, token }) {
  console.log(habit);
  function justDone() {
    console.log(habit.id);
    checkHabit(habit.id, token).then((res) => console.log(res.data));
  }
  function justUnDone() {
    console.log(habit.id);
    unCheckHabit(habit.id, token).then((res) => console.log(res.data));
  }
  return (
    <Hab>
      <div>
        <h2>{habit.name}</h2>
        {habit.done ? (
          <h3 color="#8FC549">Sequência Atual: {habit.currentSequence}</h3>
        ) : (
          <h3 color="#666666">Sequência Atual: {habit.currentSequence}</h3>
        )}
        {habit.highestSequence > habit.currentSequence ? (
          <h3 color="#8FC549">Seu Recorde: {habit.highestSequence}</h3>
        ) : (
          <h3 color="#666666">Seu Recorde: {habit.highestSequence}</h3>
        )}
      </div>
      {habit.done ? (
        <But color={"white"} back={"#8FC549"} onClick={justUnDone}>
          <ion-icon name="checkmark-outline"></ion-icon>1
        </But>
      ) : (
        <But color={"white"} back={"#EBEBEB"} onClick={justDone}>
          <ion-icon name="checkmark-outline"></ion-icon>2
        </But>
      )}
    </Hab>
  );
}

export default function TodayS() {
  const { token, photo } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [value, setValue] = useState(0);
  const [HabitID, setHabitID] = useState();

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
    setValue(0);
    for (let i = 0; i < habits.length; i++) {
      if (habits[i].done) {
        setValue(value + 1);
      }
    }
  }, []);

  return (
    <Wraper>
      <Header img={photo} />
      <Content>
        <h1>{`${
          weekday[dayjs().day()]
        }, ${dayjs().date()}/${dayjs().month()}`}</h1>
        <h2>
          {value === 0
            ? `Nenhum Hábito concluído ainda`
            : `${(value / habits.length) * 100}% dos hábitos concluídos`}
        </h2>
        <Habits>
          {habits.map((habit, index) => (
            <Habit
              token={token}
              habit={habit}
              key={index}
              index={index}
              HabitID={HabitID}
              setHabitID={setHabitID}
            />
          ))}
        </Habits>
      </Content>
      <Menu value={value} />
    </Wraper>
  );
}
const But = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ion-icon {
    width: 35px;
    height: 28px;
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.back};
`;
const Hab = styled.div`
  display: flex;
  width: 90%;
  height: 94px;
  background-color: #ffffff;
  color: #666666;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 13px;
    padding-left: 13px;
  }
`;
const Habits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
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
    margin-bottom: 10px;
  }
  h2 {
    font-size: 18px;
    color: #bababa;
    margin-left: 15px;
  }
`;
