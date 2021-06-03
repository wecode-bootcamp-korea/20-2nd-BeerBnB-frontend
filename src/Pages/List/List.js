import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filter from './Components/Filter';
import RoomCardList from './Components/RoomCardList';
import MapWrapper from './Components/MapWrapper';
import Pagination from './Components/Pagination';
import Welcome from './Components/Welcome';
import { LIST_API } from '../../config';

const List = () => {
  const [currentPageRoomList, setCurrentPageRoomList] = useState(null);
  const [everyRoom, setEveryRoom] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTooltip, setSeletedTooltip] = useState(null);
  const ROOM_PER_PAGE = 10;
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

  //first page
  useEffect(() => {
    const url = `${LIST_API}/rooms/filter`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrentPageRoomList(data.thumbnail);
        setEveryRoom(data.common);
      });
  }, []);

  console.log(currentPageRoomList);

  //filtering
  useEffect(() => {
    const makeArrayToQuery = key => {
      if (!filteredArrayTypeCondition[key]) {
        return null;
      }

      return new URLSearchParams(
        filteredArrayTypeCondition[key].map(item => [key, item])
      ).toString();
    };

    const roomTypeQuery = makeArrayToQuery('room_type');
    const amenityQuery = makeArrayToQuery('amenity');
    const stringTypeQuery = new URLSearchParams(filteredCondition).toString();

    const combineQuery = (...args) => {
      return args.reduce((acc, val) => {
        if (!acc) {
          return val;
        }
        if (val) {
          return acc + `&${val}`;
        }
        return acc;
      }, '');
    };
    //연욱님 최고

    const arrayTypeQuery = combineQuery(roomTypeQuery, amenityQuery);
    const finalQueryParams = combineQuery(stringTypeQuery, arrayTypeQuery);

    const url = `${LIST_API}/rooms?${finalQueryParams}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrentPageRoomList(data.thumbnail);
        setEveryRoom(data.common);
      });
  }, [filteredCondition, filteredArrayTypeCondition]);

  //pagination
  useEffect(() => {
    const url = `${LIST_API}/rooms?page=${currentPage}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrentPageRoomList(data.thumbnail);
        setEveryRoom(data.common);
      });
  }, [currentPage]);

  return (
    <>
      {currentPageRoomList && (
        <StyledList>
          <StyledRoomWrapper>
            <div>300개 이상의 숙소</div>
            <StyledTitle>서울의 숙소</StyledTitle>
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
            />
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalRooms={everyRoom}
              roomsPerPage={ROOM_PER_PAGE}
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

export default List;

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
