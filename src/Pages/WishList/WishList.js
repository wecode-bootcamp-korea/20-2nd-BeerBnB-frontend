import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Filter from './Components/Filter';
import RoomCardList from './Components/RoomCardList';
import MapWrapper from './Components/MapWrapper';
import Welcome from './Components/Welcome';
import { LIST_API } from '../../config';

const WishList = () => {
  const [delWishList, setDelWishList] = useState(null);
  const [currentPageRoomList, setCurrentPageRoomList] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTooltip, setSeletedTooltip] = useState(null);
  const [filteredCondition, setFilteredCondition] = useState({
    is_refund: false,
    is_super: false,
    min_price: 0,
    max_price: 1000000,
  });

  const [filteredArrayTypeCondition, setFilteredArrayTypeCondition] = useState({
    room_type: null,
    amenity: null,
  });

  useEffect(() => {
    const url = `${LIST_API}/rooms/wishlist`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrentPageRoomList(data.result);
      });

    // return () => {
    //   const option = {
    //     method: 'DELETE',
    //   };
    //   const url = `${LIST_API}/rooms/wishlist/${delWishList}`;
    //   fetch(url, option);
    // };
  }, []);

  useEffect(() => {
    const option = {
      method: 'DELETE',
    };
    const url = `${LIST_API}/rooms/wishlist/${delWishList}`;
    fetch(url, option).then(() => {
      const url2 = `${LIST_API}/rooms/wishlist`;
      fetch(url2)
        .then(res => res.json())
        .then(data => {
          setCurrentPageRoomList(data.result);
        });
    });
  }, [delWishList]);

  return (
    <>
      {currentPageRoomList && (
        <StyledList>
          <StyledRoomWrapper>
            <div>300개 이상의 숙소</div>
            <StyledTitle>민정님의 위시리스트</StyledTitle>
            <Filter
              selectedTooltip={selectedTooltip}
              setSeletedTooltip={setSeletedTooltip}
              setFilteredCondition={setFilteredCondition}
              filteredCondition={filteredCondition}
              filteredArrayTypeCondition={filteredArrayTypeCondition}
              setFilteredArrayTypeCondition={setFilteredArrayTypeCondition}
            />
            <Welcome />
            <RoomCardList
              roomList={currentPageRoomList}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              setDelWishList={setDelWishList}
            />
          </StyledRoomWrapper>
          <StyledMapWrapper>
            <MapWrapper
              roomList={currentPageRoomList}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
            />
          </StyledMapWrapper>
        </StyledList>
      )}
    </>
  );
};

const StyledList = styled.div`
  display: flex;
  padding: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const StyledRoomWrapper = styled.section`
  margin-right: 20px;

  div {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

const StyledMapWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
`;

const StyledTitle = styled.h2`
  margin: 10px 0 30px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;

export default WishList;
