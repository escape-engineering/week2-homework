import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  height: 50px;
  background-color: #99ffc3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
`;
const CoverTitles = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Header = () => {
  return (
    <div>
      <Cover>
        <CoverTitles>리액트 공부하기</CoverTitles>
        <CoverTitles>Redux</CoverTitles>
        <CoverTitles>Styled-Component</CoverTitles>
        <CoverTitles>React-Router-Dom</CoverTitles>
      </Cover>
    </div>
  );
};

export default Header;
