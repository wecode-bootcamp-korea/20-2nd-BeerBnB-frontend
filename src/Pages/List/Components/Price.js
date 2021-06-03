import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Tooltip from './Tooltip';

const Price = ({
  value,
  selectedTooltip,
  setSeletedTooltip,
  filteredCondition,
  setFilteredCondition,
}) => {
  const [price, setPrice] = useState({ min: '', max: '' });

  const deleteData = () => {
    setPrice({ min: '', max: '' });
  };

  return (
    <StyledPrice onClick={() => setSeletedTooltip(value)}>
      <Title border={selectedTooltip === value}>요금</Title>

      {selectedTooltip === value && (
        <Tooltip>
          <OptionWrapper>
            <Option>
              <StyledRangeWrapper>
                <StyledRange>
                  <label htmlFor="최저요금">최저요금</label>
                  <input
                    id="최저요금"
                    type="text"
                    placeholder="0"
                    value={price.min}
                    onChange={e => setPrice({ ...price, min: e.target.value })}
                  />
                </StyledRange>
                <span> - </span>
                <StyledRange>
                  <label htmlFor="최고요금">최고요금</label>
                  <input
                    id="최고요금"
                    type="text"
                    placeholder="1,000,000"
                    value={price.max.toLocaleString()}
                    onChange={e => setPrice({ ...price, max: e.target.value })}
                  />
                </StyledRange>
              </StyledRangeWrapper>
            </Option>
          </OptionWrapper>
          <Selection>
            <Delete onClick={deleteData} color={price.min || price.max}>
              지우기
            </Delete>
            <Save
              onClick={e => {
                e.stopPropagation();
                setFilteredCondition({
                  ...filteredCondition,
                  min_price: price.min,
                  max_price: price.max,
                });
                setSeletedTooltip(null);
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

const StyledRangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRange = styled.div`
  margin: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;

  label {
    padding: 8px;
    color: grey;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  input {
    width: 130px;
    padding: 0 8px;
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
