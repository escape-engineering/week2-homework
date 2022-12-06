import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTodo } from '../../redux/modules/todolist';
import { deleteTodo } from '../../redux/modules/todolist';
const TodoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 7px;
`;
const TodoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;
const TodoComponent = styled.div`
  width: 280px;
  height: 200px;
  border: 4px solid #ffe1e1;
  border-radius: 10px;
  display: block;
  flex-wrap: wrap;
`;
const TodoComponentTitle = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const TodoComponentDesc = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const TodoBtns = styled.div`
  text-align: center;
  margin-top: 25px;
`;
const TodoDeleteButton = styled.button`
  font-size: 15px;
  height: 40px;
  width: 100px;
  margin: 5px;
  border: 2px solid #fc320e;
  background-color: #eff5f5;
  border-radius: 5px;
  &:hover {
    border: 3px solid #fc320e;
    background-color: #d9dfdf;
  }
`;
const TodoCompleteButton = styled.button`
  font-size: 15px;
  height: 40px;
  width: 100px;
  margin: 5px;
  border: 2px solid #0bf182;
  background-color: #eff5f5;
  border-radius: 5px;
  &:hover {
    border: 3px solid #0bf182;
    background-color: #d9dfdf;
  }
`;
const TodoCancleButton = styled.button`
  font-size: 15px;
  height: 40px;
  width: 100px;
  margin: 5px;
  border: 2px solid #ffbdb1;
  background-color: #eff5f5;
  border-radius: 5px;
  &:hover {
    border: 3px solid #ffbdb1;
    background-color: #d9dfdf;
  }
`;
const List = () => {
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const changeIsdoneHandler = (id) => {
    dispatch(changeTodo(id));
  };
  return (
    <div>
      <TodoTitle>🔥오늘 할 일🔥</TodoTitle>
      <TodoWrap>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <TodoComponent key={todo.id}>
                <Link to={`/${todo.id}`}>
                  <span style={{ cursor: 'pointer' }}>상세페이지</span>
                </Link>
                <TodoComponentTitle>{todo.title}</TodoComponentTitle>
                <TodoComponentDesc>{todo.desc}</TodoComponentDesc>
                <TodoBtns>
                  <TodoDeleteButton onClick={() => deleteTodoHandler(todo.id)}>
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCompleteButton
                    onClick={() => changeIsdoneHandler(todo.id)}
                  >
                    완료
                  </TodoCompleteButton>
                </TodoBtns>
              </TodoComponent>
            );
          })}
      </TodoWrap>
      <br />
      <hr />
      <TodoTitle>⭕완료!⭕</TodoTitle>
      <TodoWrap>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <TodoComponent key={todo.id}>
                <Link to={`/${todo.id}`}>
                  <span style={{ cursor: 'pointer' }}>상세페이지</span>
                </Link>
                <TodoComponentTitle>{todo.title}</TodoComponentTitle>
                <TodoComponentDesc>{todo.desc}</TodoComponentDesc>
                <TodoBtns>
                  <TodoDeleteButton onClick={() => deleteTodoHandler(todo.id)}>
                    삭제하기
                  </TodoDeleteButton>
                  <TodoCancleButton
                    onClick={() => changeIsdoneHandler(todo.id)}
                  >
                    취소
                  </TodoCancleButton>
                </TodoBtns>
              </TodoComponent>
            );
          })}
      </TodoWrap>
    </div>
  );
};

export default List;
