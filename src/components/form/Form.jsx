import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todolist';

const HeaderBox = styled.div`
  height: 100px;
  background-color: #ffbebe;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const InputSome = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 4px 0 6px;
`;
const InputBox = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  border: none;
`;
const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  background-color: #d0ffe3;
  &:hover {
    border: 3px solid black;
    background-color: #b7f8d1;
  }
`;
const Header = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const onClickaddTodoHandler = () => {
    if (!title && !desc) return;
    dispatch(
      addTodo({
        id: todos[todos.length - 1].id + 1,
        title: title,
        desc: desc,
        isDone: false,
      })
    );
    setTitle('');
    setDesc('');
  };
  return (
    <div>
      <HeaderBox>
        <Inputs>
          <InputSome>제목 : </InputSome>
          <InputBox
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputSome>내용 : </InputSome>
          <InputBox
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Inputs>
        <SubmitButton onClick={() => onClickaddTodoHandler()}>
          추가하기
        </SubmitButton>
      </HeaderBox>
    </div>
  );
};

export default Header;
