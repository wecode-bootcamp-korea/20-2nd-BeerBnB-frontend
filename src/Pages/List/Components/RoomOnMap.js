import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { calculateAvgRating } from '../../../utilityFunc';

const RoomOnMap = ({ selectedRoom }) => {
  // const [isWishList, setIsWishList] = useState(false);

  return (
    <StyledRoomOnMap>
      <StyledImg>
        <StyledSelectedImg src={selectedRoom.image[0]} alt="방이미지" />
        {selectedRoom.is_super && <SuperHost>슈퍼호스트</SuperHost>}
        <WishList
        // onClick={e => handleWishList(selectedRoom.room_id)}
        // color={isWishList}
        >
          {/* {isWishList ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )} */}
        </WishList>
      </StyledImg>
      <StyledInfo>
        <StyledSeletctedRaging>
          <i className="fas fa-star"></i>
          {calculateAvgRating(selectedRoom)}
        </StyledSeletctedRaging>
        <p>{selectedRoom.room_type}</p>
        <StyledSeleted>{selectedRoom.room_name}</StyledSeleted>
        <StyledAddress>{selectedRoom.address}</StyledAddress>
      </StyledInfo>
    </StyledRoomOnMap>
  );
};

const StyledRoomOnMap = styled.div`
  font-size: 14px;
`;

const StyledImg = styled.article`
  position: relative;
  width: 300px;
  height: 200px;
`;

const StyledSelectedImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SuperHost = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
`;

const WishList = styled.button`
  position: absolute;
  right: 0px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;

  i {
    color: ${({ color, theme }) => (color ? 'red' : 'white')};
  }
`;

const StyledInfo = styled.div`
  /* padding: 0 15px; */ //info-window style 변경 성공 시 반영!
`;

const StyledSeletctedRaging = styled.div`
  display: flex;
  margin-top: 15px;
  font-weight: bold;
  i {
    color: red;
    margin-right: 5px;
  }
`;

export const SlideBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 14px;
  opacity: 1; //수정하기
`;

const StyledSeleted = styled.h2`
  margin-top: 5px;
  font-weight: bold;
`;

const StyledAddress = styled.div`
  max-width: 300px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export default RoomOnMap;
