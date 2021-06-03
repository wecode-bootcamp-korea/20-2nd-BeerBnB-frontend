import React from 'react';
import styled from 'styled-components/macro';
import ImgSlider, { SlideBtn } from './ImgSlider';
import { calculateAvgRating, currency } from '../../../utilityFunc';

const WishCard = ({ room, key, setSelectedRoom, setDelWishList }) => {
  console.log(currency(10000));
  return (
    <StyledRoomCard onMouseEnter={() => setSelectedRoom(room)}>
      <ImgSlider room={room} />
      <StyledRoomInfo>
        <InfoWrapper>
          <Category>{room.room_type}</Category>
          <Name>{room.room_name}</Name>
          <Amenity>
            <StyledAmenity>{room.amenity.join(' · ')}</StyledAmenity>
            <div>장기 숙박 가능 · 세탁기 · 건물 내 무료 주차</div>
            <div>최대 인원 {room.capacity}명</div>
          </Amenity>
        </InfoWrapper>
        <StyeldWishList
          onClick={() => {
            setDelWishList(room.room_id);
          }}
        >
          <i class="fas fa-times"></i>
        </StyeldWishList>
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
  position: relative;
  display: inline-block;
  width: 300px;
  margin: 10px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 20px 20px 29px #e8e8e8, -20px -20px 29px #ffffff;

  &:hover {
    ${SlideBtn} {
      opacity: 1;
    }
  }
`;

const StyledRoomInfo = styled.div`
  padding: 0 15px 15px;
`;

const InfoWrapper = styled.span``;

const Category = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
`;

const Amenity = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  div {
    margin-bottom: 5px;
  }
`;

const StyledAmenity = styled.div``;

const StyeldWishList = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;

  i {
    color: #fff;
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

export default WishCard;
