import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginS from "./LoginS";
import SignUpS from "./SignUpS";
import HabitsS from "./HabitsS";
import TodayS from "./TodayS";
import HistoryS from "./HistoryS";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [value, setValue] = useState(0);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          token,
          setToken,
          name,
          setName,
          photo,
          setPhoto,
          value,
          setValue,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginS />}></Route>
            <Route path="/cadastro" element={<SignUpS />}></Route>
            <Route path="/habitos" element={<HabitsS />}></Route>
            <Route path="/hoje" element={<TodayS />}></Route>
            <Route path="/historico" element={<HistoryS />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
