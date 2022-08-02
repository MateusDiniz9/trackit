import logo from "../Assets/logo.png";
import styled from "styled-components";
export default function LoginS() {
  return (
    <Wraper>
      <img src={logo} alt="logo" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="senha" />
      <Button>Entrar</Button>
      <h6>Não tem uma conta?Cadastre-se!</h6>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 35%;
    margin-bottom: 40px;
    width: 180px;
    height: 180px;
  }
  input {
    width: 300px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    color: #dbdbdb;
    margin-bottom: 5px;
    padding-left: 10px;
    font-weight: 400;
  }
  h6 {
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
`;

const Button = styled.div`
  width: 300px;
  height: 45px;
  background-color: #52b6ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  margin-bottom: 40px;
`;
