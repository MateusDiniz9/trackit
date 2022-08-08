import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getTodayHabits, checkHabit, unCheckHabit } from "../services/trackit";
import Header from "./Header";
import Menu from "./Menu";

function resolveValue(habits) {
  let some = 0;

  for (let i = 0; i < habits.length; i++) {
    if (habits[i].done) {
      some += 1;
    }
  }
  return (some / habits.length) * 100;
}

function Habit({ habit, token, habits, setHabits, setDone, value, setValue }) {
  if (habit.done) {
    setDone(true);
  }
  function justDone() {
    checkHabit(habit.id, token).then(() =>
      getTodayHabits(token).then((res) => {
        setHabits(res.data);
        setValue(resolveValue(res.data));
      })
    );
  }

  function justUnDone() {
    unCheckHabit(habit.id, token).then(() =>
      getTodayHabits(token).then((res) => {
        setHabits(res.data);
        setValue(resolveValue(res.data));
      })
    );
  }
  return (
    <Hab>
      <div>
        <h2>{habit.name}</h2>
        {habit.done ? (
          <Subtitle color="#8FC549">
            Sequência Atual: {habit.currentSequence}
          </Subtitle>
        ) : (
          <Subtitle color="#666666">
            Sequência Atual: {habit.currentSequence}
          </Subtitle>
        )}
        {habit.highestSequence >= habit.currentSequence &&
        habit.currentSequence !== 0 ? (
          <Subtitle color="#8FC549">
            Seu Recorde: {habit.highestSequence}
          </Subtitle>
        ) : (
          <Subtitle color="#666666">
            Seu Recorde: {habit.highestSequence}
          </Subtitle>
        )}
      </div>
      {habit.done ? (
        <But color={"white"} back={"#8FC549"} onClick={justUnDone}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </But>
      ) : (
        <But color={"white"} back={"#EBEBEB"} onClick={justDone}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </But>
      )}
    </Hab>
  );
}

export default function TodayS() {
  const { token, photo, value, setValue } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [done, setDone] = useState(false);

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
    getTodayHabits(token).then((res) => {
      setHabits(res.data);
      setValue(resolveValue(res.data));
    });
  }, []);

  return (
    <Wraper>
      <Header img={photo} />
      <Content>
        <h1>{`${
          weekday[dayjs().day()]
        }, ${dayjs().date()}/${dayjs().month()}`}</h1>
        <PercentageText done={done}>
          {!done
            ? `Nenhum Hábito concluído ainda`
            : `${Math.round(value)}% dos hábitos concluídos`}
        </PercentageText>
        <Habits>
          {habits.length > 0
            ? habits.map((habit, index) => (
                <Habit
                  token={token}
                  habit={habit}
                  key={index}
                  index={index}
                  habits={habits}
                  setHabits={setHabits}
                  setDone={setDone}
                  value={value}
                  setValue={setValue}
                />
              ))
            : ""}
        </Habits>
      </Content>
      <Menu value={value} />
    </Wraper>
  );
}

const PercentageText = styled.h2`
  font-size: 18px;
  color: ${(props) => (props.done ? "#8FC549" : "#bababa")};
  margin-left: 15px;
`;
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
`;
const Subtitle = styled.h3`
  font-size: 13px;
  padding-left: 13px;
  color: ${(props) => props.color};
`;
const Habits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Wraper = styled.div`
  background-color: #f2f2f2;
  height: calc(100vh - 70px);
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
`;
