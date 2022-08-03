import logo from "../Assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signUp } from "../services/trackit";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function SignUpS() {
  const { name, setName, photo, setPhoto } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function doSignUp(e) {
    e.preventDefault();
    signUp({ email: email, password: password, name: name, image: photo })
      .catch((res) => {
        alert(`Erro com o cadastro - ${res.message}`);
      })
      .then((res) => console.log(res.data));
  }
  return (
    <Wraper>
      <img src={logo} alt="logo" />
      <form onSubmit={doSignUp}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="foto"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <h6>Já tem uma conta? Faça Login!</h6>
      </Link>
    </Wraper>
  );
}
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    color: black;
    margin-bottom: 5px;
    padding-left: 10px;
    font-weight: 400;
    & {
      placeholder: #dbdbdb;
    }
  }
  h6 {
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
  button {
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
    border: none;
  }
`;
