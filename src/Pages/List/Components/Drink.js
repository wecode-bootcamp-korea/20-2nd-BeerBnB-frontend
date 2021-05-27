import React, { useState } from 'react';
import Tooltip from './Tooltip';
import DrinkOption from './DrinkOption';
import styled from 'styled-components';

const DRINK_LIST = [
  { id: 1, type: '맥주', info: '세계 유명 맥주 제공' },
  { id: 2, type: '위스키', info: '고급 위스키 무한 제공' },
  { id: 3, type: '와인', info: '세계적인 와이너리에서 공수한 와인 제공' },
  { id: 4, type: '칵테일', info: '각종 앉은뱅이술 제공' },
];

const INITIAL_CHECKED_STATUS = {
  맥주: false,
  위스키: false,
  와인: false,
  칵테일: false,
};

const Drink = ({ toggleTooltip, value, selectedTooltip, sendToServer }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [isChecked, setIsChecked] = useState(INITIAL_CHECKED_STATUS);

  const changeOption = item => {
    setIsChecked({ ...isChecked, [item.name]: item.checked });
    selectedDrinks.includes(item.name)
      ? setSelectedDrinks(selectedDrinks.filter(drink => drink !== item.name))
      : setSelectedDrinks([...selectedDrinks, item.name]);
  };

  const deleteData = () => {
    setSelectedDrinks([]);
    setIsChecked(INITIAL_CHECKED_STATUS);
  };

  return (
    <StyledDrink onClick={() => toggleTooltip(value)}>
      <Title border={selectedTooltip === value}>주류</Title>
      {selectedTooltip === value && (
        <Tooltip>
          <OptionWrapper>
            {DRINK_LIST.map(drink => {
              return (
                <DrinkOption
                  key={drink.id}
                  changeOption={changeOption}
                  isChecked={isChecked}
                  drink={drink}
                />
              );
            })}
          </OptionWrapper>
          <Selection>
            <Delete onClick={deleteData} color={selectedDrinks.length}>
              지우기
            </Delete>
            <Save
              onClick={e => {
                e.stopPropagation();
                sendToServer(selectedDrinks);
              }}
            >
              저장
            </Save>
          </Selection>
        </Tooltip>
      )}
    </StyledDrink>
  );
};

const StyledDrink = styled.section`
  position: relative;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: 20px;
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

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 65px;
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
export default Drink;
