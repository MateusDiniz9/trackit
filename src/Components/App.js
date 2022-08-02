import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginS from "./LoginS";
import SignUpS from "./SignUpS";
import HabitsS from "./HabitsS";
import TodayS from "./TodayS";
import HistoryS from "./HistoryS";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginS />}></Route>
          <Route path="/cadastro" element={<SignUpS />}></Route>
          <Route path="/habitos" element={<HabitsS />}></Route>
          <Route path="/hoje" element={<TodayS />}></Route>
          <Route path="/historico" element={<HistoryS />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
