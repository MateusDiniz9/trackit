import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(body) {
  const promise = axios.post(`${url}/auth/sign-up`, body);
  return promise;
}

function logIN(body) {
  const promise = axios.post(`${url}/auth/login`, body);
  return promise;
}

function createHabit(body, config) {
  const promise = axios.post(`${url}/habits`, body, config);
  return promise;
}
function listHabits(config) {
  const promise = axios.get(`${url}/habits`, config);
  return promise;
}
function deleteHabit(idHabit, config) {
  const promise = axios.delete(`${url}/habits/${idHabit}`, config);
  return promise;
}
function getTodayHabits(config) {
  const promise = axios.get(`${url}/habits/today`, config);
  return promise;
}
function checkHabit(idHabit, config) {
  const promise = axios.post(`${url}/habits/${idHabit}/check`, config);
  return promise;
}
function unCheckHabit(idHabit, config) {
  const promise = axios.post(`${url}/habits/${idHabit}/uncheck`, config);
  return promise;
}
function historyDailyHabits(config) {
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
