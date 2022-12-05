import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todolist';

const HeaderBox = styled.div`
  width: 1500px;
  height: 100px;
  background-color: grey;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const InputSome = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 4px 0 4px;
`;
const InputBox = styled.input`
  width: 200px;
  height: 35px;
`;
const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  margin-right: 10px;
`;
const Header = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const todos = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const onChangeTitleHandler = (event) => {
    const { value } = event.target;
    setTitle(value);
  };
  const onChangeDescHandler = (event) => {
    const { value } = event.target;
    setDesc(value);
  };
  const onClickaddTodoHandler = () => {
    if (
      (title === `` || title === undefined) &&
      (desc === `` || desc === undefined)
    )
      return;
    dispatch(
      addTodo({
        id: todos[todos.length - 1].id + 1,
        title: title,
        desc: desc,
        isDone: false,
      })
    );
    console.log(todos);
  };
  return (
    <div>
      <HeaderBox>
        <Inputs>
          <InputSome>제목 : </InputSome>
          <InputBox type="text" onChange={onChangeTitleHandler} />
          <InputSome>내용 : </InputSome>
          <InputBox type="text" onChange={onChangeDescHandler} />
        </Inputs>
        <SubmitButton onClick={onClickaddTodoHandler}>추가하기</SubmitButton>
      </HeaderBox>
      <Layout />
    </div>
  );
};

export default Header;
