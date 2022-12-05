import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
const TodoTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const TodoComponent = styled.div`
  width: 280px;
  height: 200px;
  border: 1px solid black;
`;
const List = () => {
  const todos = useSelector((state) => state.todolist);
  const deleteTodoHandler = () => {};
  const completeTodoHandler = () => {};
  const cancleTodoHandler = () => {};
  return (
    <div>
      <TodoTitle>오늘 할 일🔥🔥🔥</TodoTitle>
      <TodoComponent></TodoComponent>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <TodoComponent key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.desc}</div>
              <button>삭제하기</button>
              <button>완료</button>
            </TodoComponent>
          );
        })}
      <TodoTitle>완료!⭕⭕⭕</TodoTitle>
      <TodoComponent></TodoComponent>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <TodoComponent key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.desc}</div>
              <button>삭제하기</button>
              <button>취소</button>
            </TodoComponent>
          );
        })}
    </div>
  );
};

export default List;
