import React from 'react';
import styled from 'styled-components';

const RoomTypeOption = ({ changeOption, isChecked, room }) => {
  return (
    <Option>
      <Input
        type="checkbox"
        name={room.type}
        onClick={changeOption}
        checked={isChecked[room.type]}
      />
      <Label htmlFor="beer">
        <Type>{room.type}</Type>
        <div>{room.info}</div>
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
export default RoomTypeOption;
