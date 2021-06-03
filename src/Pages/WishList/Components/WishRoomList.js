import React from 'react';
import styled from 'styled-components/macro';
import WishCard from './WishCard';

const WishRoomList = ({
  roomList,
  selectedRoom,
  setSelectedRoom,
  setDelWishList,
}) => {
  return (
    <StyledWishList>
      {roomList &&
        roomList.map(room => {
          return (
            <WishCard
              room={room}
              key={room.room_id}
              setSelectedRoom={setSelectedRoom}
              setDelWishList={setDelWishList}
            />
          );
        })}
    </StyledWishList>
  );
};

const StyledWishList = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 800px;
`;
export default WishRoomList;
