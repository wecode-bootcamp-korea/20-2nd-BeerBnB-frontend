import React, { useState, useEffect } from 'react';
import ImgSlider, { SlideBtn } from './ImgSlider';
import styled from 'styled-components';
import { LIST_API } from '../../../config';
import { calculateAvgRating, currency } from '../../../utilityFunc';

const RoomCard = ({ room, setSelectedRoom, wishList }) => {
  const [isWishList, setIsWishList] = useState(false);
  const [saveWishList, setSaveWishList] = useState(null);

  useEffect(() => {
    const option = {
      method: 'POST',
    };
    const url = `${LIST_API}/rooms/wishlist/${saveWishList}`;
    fetch(url, option);
  }, [saveWishList]);

  return (
    <StyledRoomCard onMouseEnter={() => setSelectedRoom(room)}>
      <ImgSlider room={room} />

      <StyledRoomInfo>
        <InfoWrapper>
          <Category>{room.room_type}</Category>
          <Name>{room.room_name}</Name>
          <Divider />
          <Amenity>
            <div>{room.amenity.join(' · ')}</div>
            <div>장기 숙박 가능 · 세탁기 · 건물 내 무료 주차</div>
            <div>최대 인원 {room.capacity}명</div>
          </Amenity>
        </InfoWrapper>
        <WishList
          onClick={() => {
            setIsWishList(!isWishList);
            setSaveWishList(room.room_id);
          }}
          color={isWishList}
        >
          {isWishList ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </WishList>
        <StyledCardFooter>
          <Rating>
            <i className="fas fa-star"></i>
            <span>{calculateAvgRating(room)}</span>
          </Rating>
          <StyledPrice>{currency(room.price)}</StyledPrice>
        </StyledCardFooter>
      </StyledRoomInfo>
    </StyledRoomCard>
  );
};

const StyledRoomCard = styled.article`
  display: flex;
  width: 800px;
  padding: 20px 0;
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
  font-weight: bold;
  i {
    color: ${({ theme }) => theme.colors.pointColor};
    margin-right: 5px;
  }
`;

const StyledPrice = styled.span`
  font-weight: bold;
`;

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export default RoomCard;
