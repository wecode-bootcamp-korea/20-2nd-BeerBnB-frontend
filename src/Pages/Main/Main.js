import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';

function Main() {
  return (
    <BackGroundImg>
      <NavBar />
      <SearchBar />
      <Title>
        <Name>에어비앤비</Name>
        <Year>2021</Year>
      </Title>
      <Introduce>100개이상의 신규 기능을 소개합니다</Introduce>
      <NearTravel>가까운 여행지 둘러보기</NearTravel>
    </BackGroundImg>
  );
}

const BackGroundImg = styled.body`
  background-image: url('/images/rovshan-allahverdiyev-II6-iFUU4z4-unsplash.jpg');
  width: 100vw;
  height: 100vh;
  background-size: 100% auto;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
`;

const Name = styled.span`
  margin: 0px 0px 0px 80px;
`;

const Year = styled.span`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin: 0px 0px 0px 80px;
  width: 200px;
  height: 50px;
  color: white;
  background-color: black;
`;

const Introduce = styled.div`
  font-size: ${props => props.theme.fontSizes.xxl};
  margin: 20px 0px 0px 80px;
`;

const NearTravel = styled.span`
  font-size: ${props => props.theme.fontSizes.xxl};
`;

export default Main;
