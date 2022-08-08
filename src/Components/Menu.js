import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu({ value }) {
  return (
    <Wraper>
      <Link to="/habitos">
        <h6>Hábitos</h6>
      </Link>
      <Link to="/hoje">
        <div>
          <CircularProgressbar
            value={value}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
      </Link>
      <Link to="/historico">
        <h6>Histórico</h6>
      </Link>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  color: #52b6ff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  z-index: 5;

  div {
    width: 91px;
    height: 91px;
    margin-bottom: 60px;
  }
  h6 {
    color: #52b6ff;
  }
`;
