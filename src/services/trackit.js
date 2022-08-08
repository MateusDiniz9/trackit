import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function makeAuth(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function signUp(body) {
  const promise = axios.post(`${url}/auth/sign-up`, body);
  return promise;
}

function logIN(body) {
  const promise = axios.post(`${url}/auth/login`, body);
  return promise;
}

function createHabit(body, token) {
  const config = makeAuth(token);
  const promise = axios.post(`${url}/habits`, body, config);
  return promise;
}
function listHabits(token) {
  const config = makeAuth(token);
  const promise = axios.get(`${url}/habits`, config);
  return promise;
}
function deleteHabit(idHabit, token) {
  const config = makeAuth(token);
  const promise = axios.delete(`${url}/habits/${idHabit}`, config);
  return promise;
}
function getTodayHabits(token) {
  const config = makeAuth(token);
  const promise = axios.get(`${url}/habits/today`, config);
  return promise;
}
function checkHabit(idHabit, token) {
  const config = makeAuth(token);
  const promise = axios.post(`${url}/habits/${idHabit}/check`, {}, config);
  return promise;
}
function unCheckHabit(idHabit, token) {
  const config = makeAuth(token);
  const promise = axios.post(`${url}/habits/${idHabit}/uncheck`, {}, config);
  return promise;
}
function historyDailyHabits(token) {
  const config = makeAuth(token);
  const promise = axios.get(`${url}/habits/history/daily`, config);
  return promise;
}
export {
  signUp,
  logIN,
  createHabit,
  listHabits,
  deleteHabit,
  getTodayHabits,
  checkHabit,
  unCheckHabit,
  historyDailyHabits,
};
