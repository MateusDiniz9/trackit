import styled from "styled-components";

export default function NewHabit({ new1, setNew1 }) {
  if (new1 === false) {
    return <></>;
  } else {
    return (
      <Wraper>
        <input type="text" placeholder="nome do hábito" />
        <Days>
          <button>D</button>
          <button>S</button>
          <button>T</button>
          <button>Q</button>
          <button>Q</button>
          <button>S</button>
          <button>S</button>
        </Days>
        <Buttons>
          <button onClick={() => setNew1(false)}>Cancelar</button>
          <button>Salvar</button>
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
  button {
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    margin-right: 5px;
    color: #d4d4d4;
    border-radius: 5px;
    background-color: #ffffff;
  }
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
