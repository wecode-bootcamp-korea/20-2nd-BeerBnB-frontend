import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const SuperHost = ({
  value,
  selectedTooltip,
  setSeletedTooltip,
  filteredCondition,
  setFilteredCondition,
}) => {
  const [isSuperHost, setIsSuperHOst] = useState(false);

  const moveSwitch = () => {
    setIsSuperHOst(!isSuperHost);
  };

  return (
    <StyledSuperHost onClick={() => setSeletedTooltip(value)}>
      <Title border={selectedTooltip === value}>슈퍼호스트</Title>
      {selectedTooltip === value && (
        <Tooltip>
          <OptionWrapper>
            <Option>슈퍼 호스트의 숙소만 검색 결과에 표시</Option>
            <SwitchWrapper onClick={moveSwitch} bgColor={isSuperHost}>
              <Switch move={isSuperHost} />
            </SwitchWrapper>
          </OptionWrapper>
          <Selection>
            <Delete onClick={moveSwitch} color={isSuperHost}>
              지우기
            </Delete>
            <Save
              onClick={e => {
                e.stopPropagation();
                setFilteredCondition({
                  ...filteredCondition,
                  is_super: isSuperHost,
                });
                setSeletedTooltip(null);
              }}
            >
              저장
            </Save>
          </Selection>
        </Tooltip>
      )}
    </StyledSuperHost>
  );
};

const StyledSuperHost = styled.section`
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
  align-items: center;
  width: 360px;
  height: 100px;
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
  width: 50px;
  height: 32px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors.textColor : '#b0b0b0'};
  border-radius: 40px;
  padding: 4px 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, bgColor }) =>
      bgColor ? theme.colors.textColor : '#767676'};
  }
`;

const Switch = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  transition: all 250ms ease-in;
  transform: ${({ move }) => move && 'translateX(50%)'};
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

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const Save = styled.button`
  width: 60px;
  height: 34px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.textColor};
  color: #fff;
  border-radius: 5px;
`;

export default SuperHost;
