import React from 'react';
import styled from 'styled-components';
import List from '../list/List';
import Todo from '../todo/Todo';

const BodyBind = styled.div`
  margin-left: 120px;
`;
const Layout = () => {
  return (
    <BodyBind>
      <List />
    </BodyBind>
  );
};

export default Layout;
