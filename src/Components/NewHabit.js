import { useState } from "react";
import styled from "styled-components";
import { createHabit } from "../services/trackit";

function Day({ day, index, sel, setSel }) {
  const [clicked, setClicked] = useState(false);
  day = { ...day, clicked };
  function selectDay() {
    setClicked(!clicked);
    setSel([...sel, index]);
  }
  function unSelectDay() {
    setClicked(!clicked);
    let ind = sel.indexOf(index);
    sel.splice(ind, 1);
  }
  if (day.clicked) {
    return (
      <>
        <But onClick={unSelectDay} color={"#ffffff"} backcolor={"#d4d4d4"}>
          {day.name}
        </But>
      </>
    );
  } else {
    return (
      <>
        <But onClick={selectDay} color={"#d4d4d4"} backcolor={"#ffffff"}>
          {day.name}
        </But>
      </>
    );
  }
}

export default function NewHabit({ new1, setNew1, token }) {
  const [sel, setSel] = useState([]);
  const days = [
    {
      name: "D",
    },
    {
      name: "S",
    },
    {
      name: "T",
    },
    {
      name: "Q",
    },
    {
      name: "Q",
    },
    {
      name: "S",
    },
    {
      name: "S",
    },
  ];
  const [daysD, setDaysD] = useState([...days]);
  const [name, setName] = useState("");

  function postHabit() {
    const body = {
      name: name,
      days: sel,
    };
    createHabit(body, token)
      .catch((res) => alert(res.response))
      .then();
    setNew1(false);
    setSel([]);
    setName([]);
    setDaysD([...days]);
  }

  if (new1 === false) {
    return <></>;
  } else {
    return (
      <Wraper>
        <input
          type="text"
          placeholder="nome do hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Days>
          {daysD.map((day, index) => (
            <Day
              day={day}
              key={index}
              index={index}
              sel={sel}
              setSel={setSel}
            />
          ))}
        </Days>
        <Buttons>
          <button onClick={() => setNew1(false)}>Cancelar</button>
          <button onClick={postHabit}>Salvar</button>
        </Buttons>
      </Wraper>
    );
  }
}

const Wraper = styled.div`
  width: 90%;
  height: 180px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 25px auto;
  margin-bottom: 105px;
  input {
    width: 90%;
    height: 45px;
    color: #d4d4d4;
    border: 1px solid #d4d4d4;
    padding-left: 10px;
    margin: 18px auto;
    border-radius: 5px;
    font-size: 18px;
  }
`;

const Days = styled.div`
  margin-left: 15px;
  display: flex;
`;

const But = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  margin-right: 5px;
  color: ${(props) => props.color};
  border-radius: 5px;
  background-color: ${(props) => props.backcolor};
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }
  button:nth-child(1) {
    color: #52b6ff;
    background-color: white;
  }
  button:nth-child(2) {
    color: white;
    background-color: #52b6ff;
  }
`;
