import logo from "../Assets/logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { logIN } from "../services/trackit";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { BallTriangle } from "react-loader-spinner";

export default function LoginS() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [able, setAble] = useState(false);

  const { setToken, setName, setPhoto } = useContext(UserContext);
  const navigate = useNavigate();
  function doLogin(e) {
    e.preventDefault();
    setAble(true);
    logIN({ email: email, password: password }).then((res) => {
      setToken(res.data.token);
      setName(res.data.name);
      setPhoto(res.data.image);
      setAble(false);
      navigate("/hoje");
    });
  }
  return (
    <Wraper>
      <img src={logo} alt="logo" />
      <form onSubmit={doLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={able}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={able}
        />
        <button type="submit" disabled={able}>
          {able ? (
            <BallTriangle
              height="40"
              width="40"
              radius="5"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link to="/cadastro">
        <h6>Não tem uma conta?Cadastre-se!</h6>
      </Link>
    </Wraper>
  );
}

const Wraper = styled.div`
  width: 100%;
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
