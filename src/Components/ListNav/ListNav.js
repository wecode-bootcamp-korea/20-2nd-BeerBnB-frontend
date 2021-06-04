import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FILTER_URL } from '../../config';
import moment from 'moment';
import Calender from '../SearchBar/Calender/Calender';
import CheckPeople from '../SearchBar/CheckPeople/CheckPeople';

function SearchBar() {
  const [calenderBtn, setCalenderBtn] = useState(false);
  const [checkPeopleBtn, setCheckPeopleBtn] = useState(false);
  const [checkInDay, setCheckInDay] = useState('');
  const [checkOutDay, setCheckOutDay] = useState('');
  const [searchPlace, setSearchPlace] = useState('');
  const [currentPeople, setCurrentPeople] = useState('');
  const [peopleNum, setPeopleNum] = useState({
    adult: 0,
    child: 0,
    baby: 0,
  });

  const SearchBtn = () => {
    const checkInfo = {
      checkin: moment(checkInDay).format('YYYY-MM-DD'),
      checkout: moment(checkOutDay).format('YYYY-MM-DD'),
      city: searchPlace,
      adult: peopleNum,
    };
    const checkInfoQuery = new URLSearchParams(checkInfo).toString();
    fetch(`${FILTER_URL}/rooms/filter?${checkInfoQuery}`, {
      method: 'POST',
    });
  };

  const calenderOpen = () => {
    setCalenderBtn(!calenderBtn);
  };
  const checkPeopleOpen = () => {
    setCheckPeopleBtn(!checkPeopleBtn);
  };
  const checkPeopleNum = e => {
    setPeopleNum(e.target.value);
  };
  const SearchPlace = e => {
    setSearchPlace(e.target.value);
  };

  return (
    <>
      <Container>
        <LogoImg src="/images/logo.png" />
        <SearchBarContainer>
          <SearchBarBtn>
            <div>위치</div>
            <input
              type="text"
              placeholder="어디로 여행가세요?"
              onChange={SearchPlace}
            ></input>
          </SearchBarBtn>
          <SearchBarBtn onClick={calenderOpen}>
            <div>체크인</div>
            <div>
              {checkInDay === ''
                ? '날짜 입력'
                : moment(checkInDay).format('YYYY-MM-DD')}
            </div>
          </SearchBarBtn>
          <SearchBarBtn onClick={calenderOpen}>
            <div>체크아웃</div>
            <div>
              {checkOutDay === ''
                ? '날짜입력'
                : moment(checkOutDay).format('YYYY-MM-DD')}
            </div>
          </SearchBarBtn>
          <SearchBarBtn onClick={checkPeopleOpen}>
            <div>인원</div>
            <div>
              <input
                type="text"
                placeholder="어디로 여행가세요?"
                onChange={checkPeopleNum}
              ></input>
            </div>
          </SearchBarBtn>
          <ZoomImgContainer onClick={SearchBtn}>
            <ZoomImg />
          </ZoomImgContainer>
        </SearchBarContainer>
        {calenderBtn && (
          <Calender
            // ref={calenderEl}
            checkInDay={checkInDay}
            checkOutDay={checkOutDay}
            setCheckInDay={setCheckInDay}
            setCheckOutDay={setCheckOutDay}
            setCalenderBtn={setCalenderBtn}
          />
        )}
        {checkPeopleBtn && (
          <CheckPeople
            currentPeople={currentPeople}
            setCurrentPeople={setCurrentPeople}
          />
        )}
        <ProfileContainer>
          <MenuImg />
          <ProfileImg />
        </ProfileContainer>
      </Container>
    </>
  );
}
export default SearchBar;
const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px 0px 0px 80px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 80px 0px 0px;
  width: 75px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 30px 30px;
  background-color: white;
  cursor: pointer;
`;
const MenuImg = styled.img.attrs(() => ({
  alt: '메뉴버튼',
  src: '/images/menu.png',
}))`
  width: 20px;
  height: 20px;
  margin: 0px 0px 0px 5px;
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 0.1;
  }
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

const ZoomImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0px 0px 0px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.pointColor};
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  :active {
    box-shadow: 2px 2px 0 rgb(0, 0, 0, 0.5);
  }
`;
const ZoomImg = styled.img.attrs(() => ({
  alt: '돋보기',
  src: '/images/zoom.png',
}))`
  width: 20px;
  height: 20px;
`;
const SearchBarBtn = styled.div`
  position: relative;
  width: 170px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  transition: 0.5s;
  :active {
    box-shadow: 2px 2px 0 rgb(0, 0, 0, 0.5);
  }
  :hover {
    transition: 0.5s;
    background-color: #fff1eb;
    border-radius: 40px;
    cursor: pointer;
  }
  input {
    color: #717171;
    font-weight: lighter;
    font-size: ${props => props.theme.fontSizes.m};
  }
  div:first-child {
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.m};
    margin-bottom: 10px;
  }
  div:nth-child(2) {
    color: #717171;
    font-weight: lighter;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 0px 0px 30px;
  margin-bottom: 20px;
  border-radius: 40px;
  background-color: white;
  width: 850px;
  height: 65px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
