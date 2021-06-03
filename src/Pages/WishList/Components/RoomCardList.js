import React from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';

const RoomCardList = ({
  roomList,
  selectedRoom,
  setSelectedRoom,
  calculateAvgRating,
  setDelWishList,
}) => {
  return (
    <StyledList>
      {roomList &&
        roomList.map(room => {
          return (
            <RoomCard
              room={room}
              key={room.room_id}
              setSelectedRoom={setSelectedRoom}
              setDelWishList={setDelWishList}
            />
          );
        })}
    </StyledList>
  );
};

const StyledList = styled.section`
  cursor: pointer;
`;

export default RoomCardList;
