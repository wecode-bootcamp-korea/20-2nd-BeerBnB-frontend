import React, { useState } from 'react';
import Tooltip from './Tooltip';
import RoomTypeOption from './RoomTypeOption';
import styled from 'styled-components';

const ROOM_TYPE_LIST = [
  { id: 1, type: '아파트', info: '집 전체를 단독으로 사용합니다' },
  {
    id: 2,
    type: '주택',
    info: '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다',
  },
  {
    id: 3,
    type: '호텔',
    info: '부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다',
  },
  {
    id: 4,
    type: '별채',
    info: '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다',
  },
];

const INITIAL_CHECKED_STATUS = {
  아파트: false,
  주택: false,
  호텔: false,
  별채: false,
};

const RoomType = ({
  value,
  selectedTooltip,
  setSeletedTooltip,
  filteredArrayTypeCondition,
  setFilteredArrayTypeCondition,
}) => {
  const [roomType, setRoomType] = useState([]);
  const [isChecked, setIsChecked] = useState(INITIAL_CHECKED_STATUS);
  const [changedDataType, setChangeDataType] = useState({ room_type: null });

  const changeOption = e => {
    const { name, checked } = e.target;
    setIsChecked({ ...isChecked, [name]: checked });
    roomType.includes(name)
      ? setRoomType(roomType.filter(room => room !== name))
      : setRoomType([...roomType, name]);
  };

  const deleteData = () => {
    setRoomType([]);
    setIsChecked(INITIAL_CHECKED_STATUS);
  };

  return (
    <StyledRoomType onClick={() => setSeletedTooltip(value)}>
      <Title border={selectedTooltip === value}>숙소 유형</Title>

      {selectedTooltip === value && (
        <Tooltip>
          <OptionWrapper>
            {ROOM_TYPE_LIST.map(room => {
              return (
                <RoomTypeOption
                  key={room.id}
                  changeOption={changeOption}
                  isChecked={isChecked}
                  room={room}
                />
              );
            })}
          </OptionWrapper>
          <Selection>
            <Delete onClick={deleteData} color={roomType.length}>
              지우기
            </Delete>
            <Save
              onClick={e => {
                e.stopPropagation();
                setChangeDataType({ ...changedDataType });
                setFilteredArrayTypeCondition({
                  ...filteredArrayTypeCondition,
                  room_type: roomType,
                });
                setSeletedTooltip(null);
              }}
            >
              저장
            </Save>
          </Selection>
        </Tooltip>
      )}
    </StyledRoomType>
  );
};

const StyledRoomType = styled.section`
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

export default RoomType;
