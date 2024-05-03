import axios from "axios";
import { url } from "../../api";

export const getTodos = () => {
  return async (dispatch) => {
    await axios.get(`${url}/todos`).then((todos) => {
      dispatch({
        type: "GET_TODOS",
        todos,
      }).catch((error) => {
        console.log(error.response);
      });
    });
  };
};

export const addTodo = (todo) => {
  console.log(todo)
  return (dispatch, getState) => {
    axios.post("http://localhost:5000/api/todos",).then((todo) => {
      dispatch({
        type: "ADD_TODO",
        todo,
      }).catch((error) => {
        console.log(error.response);
      });
    });
  };
};
