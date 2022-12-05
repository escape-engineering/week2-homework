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
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};
// Initial State
const initialState = [
  {
    id: 0,
    title: '리액트 리덕스 너무어려워',
    desc: '리액트 라우터 돔 어려워',
    isDone: false,
  },
  {
    id: 1,
    title: '리액트 너무어려워',
    desc: '리액트 어려워',
    isDone: true,
  },
];

// Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    // case DELETE_TODO:
    //   return [];
    // case CHANGE_TODO:
    //   return [];
    default:
      return state;
  }
};
// export default reducer
export default todolist;
