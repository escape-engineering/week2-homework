import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Detail = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DetailTop = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
`;
const BackBtn = styled.button`
  width: 110px;
  height: 40px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #d4d4d4;
  &:hover {
    border: 2px solid black;
    background-color: #b3b3b3;
  }
`;
const DetailTitle = styled.h1`
  padding: 0px 24px;
`;
const DetailDesc = styled.div`
  padding: 0px 24px;
`;
const Todo = () => {
  const navigate = useNavigate();
  const param = useParams();
  const todos = useSelector((state) => state.todolist);
  const targetTodo = todos.find((todo) => todo.id === parseInt(param.id));
  return (
    <Wrap>
      <Detail>
        <div>
          <DetailTop>
            <div>id : {targetTodo.id}</div>
            <BackBtn
              onClick={() => {
                navigate('/');
              }}
            >
              이전으로
            </BackBtn>
          </DetailTop>
          <DetailTitle>{targetTodo.title}</DetailTitle>
          <DetailDesc>{targetTodo.desc}</DetailDesc>
        </div>
      </Detail>
    </Wrap>
  );
};

export default Todo;
