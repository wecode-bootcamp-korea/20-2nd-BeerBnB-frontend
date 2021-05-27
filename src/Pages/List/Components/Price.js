import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';
import PriceRange from './PriceRange';

const Price = ({ toggleTooltip, value, selectedTooltip }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const deleteData = () => {
    setMinPrice(0);
    setMaxPrice(0);
  };
  return (
    <StyledPrice onClick={() => toggleTooltip(value)}>
      <Title border={selectedTooltip === value}>요금</Title>

      {selectedTooltip === value && (
        <Tooltip>
          <OptionWrapper>
            <Option>
              {/* <StayledRangeBar>
                <input type="range" name="" id="" min="0" max="200000" />
              </StayledRangeBar> */}
              <StyledRangeWrapper>
                <StyledRange>
                  <label htmlFor="최저요금">최저요금</label>
                  <input id="최저요금" type="text" />
                </StyledRange>
                <span> - </span>
                <StyledRange>
                  <label htmlFor="최고요금">최고요금</label>
                  <input id="최고요금" type="text" />
                </StyledRange>
                {/* <PriceRange /> */}
              </StyledRangeWrapper>
            </Option>
          </OptionWrapper>
          <Selection>
            <Delete onClick={deleteData} color={minPrice || maxPrice}>
              지우기
            </Delete>
            <Save
              onClick={e => {
                e.stopPropagation();
              }}
            >
              저장
            </Save>
          </Selection>
        </Tooltip>
      )}
    </StyledPrice>
  );
};

const StyledPrice = styled.section`
  position: relative;
`;

const Title = styled.h2`
  margin-right: ${({ border }) => (border ? '8px' : '10px')};
  margin-bottom: ${({ border }) => (border ? '28px' : '30px')};
  padding: 8px 16px;
  border-style: solid;
  border-width: ${({ border }) => (border ? '2px' : '1px')};
  border-color: ${({ theme, border }) =>
    border ? theme.colors.textColor : theme.colors.borderColor};
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme, border }) => !border && theme.colors.textColor};
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Option = styled.div`
  width: 254px;
  margin-right: 10px;
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 48px;
  height: 32px;
  padding: 3px 4px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors.textColor : '#b0b0b0'};
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, bgColor }) =>
      bgColor ? theme.colors.textColor : '#767676'};
  }
`;

const Switch = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  transition: all 250ms ease-in;
  transform: ${({ move }) => move && 'translateX(50%)'};
`;

const StayledRangeBar = styled.div`
  margin-bottom: 20px;

  input {
    width: 250px;
  }
`;

const StyledRangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRange = styled.div`
  /* padding: 5px; */
  margin: 5px;
  border: 1px solid black;
  border-radius: 8px;
  label {
    color: grey;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  input {
    width: 130px;
    font-size: 16px;

    &:focus {
      border: 2px;
    }
  }
`;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 65px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const Delete = styled.button`
  width: 66px;
  height: 40px;
  color: ${({ theme, color }) =>
    color ? theme.colors.textColor : theme.colors.borderColor};
  font-weight: bold;
  text-decoration: underline;
  transition: all 250ms ease-in;

  &:hover {
    background-color: #f6f6f6;
    border-radius: 5px;
  }
`;

const Save = styled.button`
  width: 60px;
  height: 34px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.textColor};
  color: #fff;
  border-radius: 5px;
`;

export default Price;
