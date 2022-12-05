import React from 'react';
import Header from '../header/Header';
import styled from 'styled-components';

const Cover = styled.div`
  width: 1500px;
  height: 50px;
  margin: 0 auto;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
`;
const CoverTitles = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Form = () => {
  return (
    <div>
      <Cover>
        <CoverTitles>리액트 공부하기</CoverTitles>
        <CoverTitles>Redux</CoverTitles>
        <CoverTitles>Styled-Component</CoverTitles>
        <CoverTitles>React-Router-Dom</CoverTitles>
      </Cover>
      <Header />
    </div>
  );
};

export default Form;
