import React from 'react';
import styled from 'styled-components';

const DrinkOption = ({ changeOption, isChecked, drink }) => {
  return (
    <Option>
      <Input
        type="checkbox"
        name={drink.type}
        onClick={e => changeOption(e.target)}
        checked={isChecked[drink.type]}
      />
      <Label htmlFor="beer">
        <Type>{drink.type}</Type>
        <div>{drink.info}</div>
      </Label>
    </Option>
  );
};

const Option = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Label = styled.label`
  width: 272px;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export default DrinkOption;
