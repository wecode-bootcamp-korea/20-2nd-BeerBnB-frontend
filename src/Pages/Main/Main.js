import React from 'react';
import styled from 'styled-components';
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';

function Main() {
  return (
    <BackGroundImg>
      <NavBar />
      <SearchBar />
      <Title>
        <Name>비어비앤비</Name>
        <Year>2021</Year>
        <Introduce>놀다가세요</Introduce>
        <WhatsNew>알아보기</WhatsNew>
      </Title>
      <TravelText>가까운 여행지 둘러보기</TravelText>
      <TravelContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/gangnam.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/dongjak.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/gwanak.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/gangdong.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
      </TravelContainer>
      <TravelContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/jungu.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/seocho.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/seodaemun.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
        <TravelImgTextContainer>
          <TravelPlace src="/images/songpa.jpg" />
          <div>서울</div>
        </TravelImgTextContainer>
      </TravelContainer>
    </BackGroundImg>
  );
}
export default Main;

const TravelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0px 0px 0px;
`;
const TravelImgTextContainer = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.mainTextColor};
  border: 1px solid #cadfe4;
  padding: 10px;
  border-radius: 20px;
  background-color: #cadfe4;
  opacity: 0.2;
  div {
    color: ${props => props.theme.colors.mainTextColor};
    margin: 20px 0px 0px 20px;
  }
`;

const TravelPlace = styled.img`
  border-radius: 10px;
  width: 60px;
  height: 60px;
`;

const BackGroundImg = styled.body`
  background-image: url('/images/background.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  width: 400px;
  height: 200px;
  margin: 100px 0px 0px 80px;
  font-size: ${props => props.theme.fontSizes.xl};
`;

const Name = styled.span`
  color: ${props => props.theme.colors.mainTextColor};
`;

const Year = styled.span`
  border: 1px solid ${props => props.theme.colors.pointColor};
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin: 0px 0px 0px 10px;
  width: 200px;
  height: 50px;
  color: ${props => props.theme.colors.mainTextColor};
  background-color: ${props => props.theme.colors.pointColor};
`;

const Introduce = styled.div`
  font-size: ${props => props.theme.fontSizes.xxl};
  margin: 20px 0px 0px 0px;
  color: ${props => props.theme.colors.mainTextColor};
`;
const WhatsNew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.pointColor};
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin: 20px 0px 0px 0px;
  width: 150px;
  height: 35px;
  color: ${props => props.theme.colors.mainTextColor};
  background-color: ${props => props.theme.colors.pointColor};
  font-size: ${props => props.theme.fontSizes.m};
`;

const TravelText = styled.span`
  color: ${props => props.theme.colors.mainTextColor};
  margin: 10px 0px 0px 80px;
  font-size: ${props => props.theme.fontSizes.xxl};
`;
