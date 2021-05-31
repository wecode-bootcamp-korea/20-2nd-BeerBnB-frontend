import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import styled from 'styled-components';

const RoomCardList = ({ roomList }) => {
  return (
    <StyledList>
      {roomList &&
        roomList.map(room => {
          return <RoomCard room={room} key={room.id} />;
        })}
    </StyledList>
  );
};

const StyledList = styled.section`
  cursor: pointer;
`;

export default RoomCardList;
