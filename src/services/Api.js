import { TODOS_URL } from "./Constants";

export function fetchAllTodos() {
  return fetch(TODOS_URL, {
    method: "GET"
  });
}
