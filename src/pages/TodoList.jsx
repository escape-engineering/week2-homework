import React from 'react';
import styled from 'styled-components';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import List from '../components/list/List';

const FullLayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const TodoList = () => {
  return (
    <FullLayout>
      <Form />
      <Header />
      <List />
    </FullLayout>
  );
};

export default TodoList;
