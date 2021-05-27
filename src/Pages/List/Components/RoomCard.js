import React, { useState } from 'react';
import styled from 'styled-components';
import ImgSlider, { SlideBtn } from './ImgSlider';

const RoomCard = ({ room }) => {
  const [isWishList, setIsWishList] = useState(false);

  const handleWishList = data => {
    setIsWishList(!isWishList);

    //server에 data보내기
  };

  return (
    <StyledRoomCard>
      <ImgSlider room={room} />

      <StyledRoomInfo>
        <InfoWrapper>
          <Category>{room.category}</Category>
          <Name>{room.name}</Name>
          <Divider />
          <Amenity>
            <div>{room.amenity.join(' · ')}</div>
            <div>장기 숙박 가능 · 세탁기 · 건물 내 무료 주차</div>
          </Amenity>
        </InfoWrapper>
        <WishList onClick={e => handleWishList(room.id)} color={isWishList}>
          {isWishList ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </WishList>
        <Rating>
          <i className="fas fa-star"></i>
          <span>{room.rating}</span>
        </Rating>
      </StyledRoomInfo>
    </StyledRoomCard>
  );
};

const StyledRoomCard = styled.article`
  display: flex;
  width: 800px;
  padding: 20px;
  border-bottom: 1px solid #ebebeb;

  &:hover {
    ${SlideBtn} {
      opacity: 1;
    }
  }
`;

const StyledRoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 476px;
  height: 200px;
`;

const InfoWrapper = styled.div`
  color: #717171;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const Category = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
`;

const Divider = styled.div`
  width: 32px;
  margin-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const Amenity = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  div {
    margin-bottom: 5px;
  }
`;

const WishList = styled.button`
  position: absolute;
  right: 0px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;

  i {
    color: ${({ color, theme }) =>
      color ? theme.colors.pointColor : theme.colors.textColor};
  }
`;

const Rating = styled.div`
  display: flex;
  margin-top: 15px;
  font-weight: bold;
  i {
    color: ${({ theme }) => theme.colors.pointColor};
    margin-right: 5px;
  }
`;

export default RoomCard;
