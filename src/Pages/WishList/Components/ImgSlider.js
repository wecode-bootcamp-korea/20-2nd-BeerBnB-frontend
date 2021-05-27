import React, { useState } from 'react';
import styled from 'styled-components';

const ImgSlider = ({ room }) => {
  const [index, setIndex] = useState(0);

  const prevImg = () => {
    setIndex((index + room.image.length - 1) % room.image.length);
  };

  const nextImg = () => {
    setIndex((index + 1) % room.image.length);
  };

  return (
    <StyledSlider>
      <StyledImg src={room.image[index]} />
      <SlideBtn>
        <Left onClick={prevImg}>
          <i class="fas fa-chevron-left"></i>
        </Left>
        <Right onClick={nextImg}>
          <i class="fas fa-chevron-right"></i>
        </Right>
      </SlideBtn>
      {room.is_super && <SuperHost>슈퍼호스트</SuperHost>}
    </StyledSlider>
  );
};

const StyledSlider = styled.article`
  position: relative;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
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
  font-size: ${({ theme }) => theme.fontSizes.s};
  opacity: 0;
`;

const Left = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
  cursor: pointer;
`;

const Right = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
  cursor: pointer;
`;

const SuperHost = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.m};
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
`;

export default ImgSlider;
