// src/redux/modules/todo.js

// Action Value
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_TODO = 'CHANGE_TODO';
// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
export const changeTodo = (id) => {
  return {
    type: CHANGE_TODO,
    id,
  };
};
// Initial State
const initialState = [
  {
    id: 0,
    title: '리덕스 공부',
    desc: '리덕스 이해하기',
    isDone: false,
  },
  {
    id: 1,
    title: '숨쉬기',
    desc: '호흡을 해봅시다.',
    isDone: true,
  },
];

// Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case CHANGE_TODO:
      //map
      let copyState = [...state];
      return copyState.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    //findindex
    // let findIndex = state.findIndex((todo) => todo.id === action.id);
    // let copyState = [...state];
    // if (copyState[findIndex].isDone === false) {
    //   copyState[findIndex] = { ...copyState[findIndex], isDone: true };
    //   return copyState;
    // } else {
    //   copyState[findIndex] = { ...copyState[findIndex], isDone: false };
    //   return copyState;
    // }
    default:
      return state;
  }
};
// export default reducer
export default todolist;
