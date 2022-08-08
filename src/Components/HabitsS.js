import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { listHabits, deleteHabit } from "../services/trackit";
import Header from "./Header";
import Menu from "./Menu";
import NewHabit from "./NewHabit";

function Day({ day }) {
  if (day.selected) {
    return (
      <D color={"#ffffff"} back={"#d4d4d4"}>
        {day.name}
      </D>
    );
  } else {
    return (
      <D color={"#d4d4d4"} back={"#ffffff"}>
        {day.name}
      </D>
    );
  }
}
function Habit({ habit, token, confirm, setConfirm, habitId, setHabitId }) {
  const days = [
    { name: "D", selected: false },
    { name: "S", selected: false },
    { name: "T", selected: false },
    { name: "Q", selected: false },
    { name: "Q", selected: false },
    { name: "S", selected: false },
    { name: "S", selected: false },
  ];
  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < habit.days.length; j++) {
      if (habit.days[j] === i) {
        days[i].selected = true;
      }
    }
  }

  function deletHabit() {
    setConfirm(true);
    setHabitId(habit.id);
  }
  function accept() {
    deleteHabit(habitId, token).then((res) => console.log(res));
    setConfirm(false);
  }
  function reject() {
    setConfirm(false);
  }
  return (
    <Hab>
      <ion-icon name="trash-outline" onClick={deletHabit}></ion-icon>
      <h1>{habit.name}</h1>
      <div>
        {days.map((day, index) => (
          <Day day={day} key={index} />
        ))}
      </div>
      {confirm ? (
        <ConfirmBox>
          <h2>Quer deletar o Habito?</h2>
          <div>
            <button onClick={reject}>Não Quero</button>
            <button onClick={accept}>Quero</button>
          </div>
        </ConfirmBox>
      ) : (
        ""
      )}
    </Hab>
  );
}

export default function HabitsS() {
  const { token, photo } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [new1, setNew1] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [habitId, setHabitId] = useState();

  useEffect(() => {
    listHabits(token).then((res) => setHabits(res.data));
  }, [new1, confirm, habitId]);

  function createNewHabit() {
    setNew1(true);
  }
  return (
    <Wraper>
      <Header img={photo} />
      <Top>
        <h1>Meus Hábitos</h1>
        <button onClick={createNewHabit}>+</button>
      </Top>
      <Habits new={new1}>
        {habits.length === 0 ? (
          <h4>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h4>
        ) : (
          habits.map((habit, index) => (
            <Habit
              habit={habit}
              key={index}
              token={token}
              confirm={confirm}
              setConfirm={setConfirm}
              habitId={habitId}
              setHabitId={setHabitId}
            />
          ))
        )}
      </Habits>
      <NewHabit new1={new1} setNew1={setNew1} token={token} />

      <Menu value={66} />
    </Wraper>
  );
}
const Habits = styled.div`
  margin-bottom: ${(props) => (props.new ? "0" : "105px")};
`;
const ConfirmBox = styled.div`
  width: 200px;
  height: 100px;
  position: fixed;
  top: 40%;
  right: 25%;
  display: flex;
  flex-direction: column;
  background-color: #666666;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  div {
    display: flex;
  }
  button {
    margin-right: 10px;
    margin-top: 10px;
    width: 75px;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: #666666;
    background-color: white;
    font-size: 12px;
  }
`;
const Hab = styled.div`
  position: relative;
  width: 90%;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0px auto;
  margin-top: 20px;
  padding-left: 20px;
  padding-top: 15px;
  div {
    display: flex;
  }
  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
    color: #666666;
  }
  ion-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
const D = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  margin-right: 5px;
  color: ${(props) => props.color};
  border-radius: 5px;
  background-color: ${(props) => props.back};
`;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 100%;
  h4 {
    margin-top: 20px;
    font-size: 18px;
    color: #666666;
    padding: 0 10px;
  }
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
