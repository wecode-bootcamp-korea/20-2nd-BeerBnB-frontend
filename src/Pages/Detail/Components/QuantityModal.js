import React from 'react';
import styled from 'styled-components';

const QuantityModal = ({
  handleModal,
  detailData,
  currentPeople,
  setCurrentPeople,
}) => {
  const capacity = detailData.capacity;

  const peopleQquantityArr = [
    { title: '성인', valueKey: 'adult', quantity: currentPeople.adult },
    { title: '어린이', valueKey: 'child', quantity: currentPeople.child },
    { title: '유아', valueKey: 'baby', quantity: currentPeople.baby },
  ];

  const plus = valueKey => {
    setCurrentPeople({
      ...currentPeople,
      [valueKey]: currentPeople[valueKey] + 1,
    });
  };

  const minus = valueKey => {
    setCurrentPeople({
      ...currentPeople,
      [valueKey]: currentPeople[valueKey] - 1,
    });
  };

  return (
    <StyledQuantityModal>
      {peopleQquantityArr.map(el => (
        <Flexcontainer>
          <div>{el.title}</div>
          <div>
            <QuantityMinusButton
              onClick={() => minus(el.valueKey)}
              disabled={el.quantity <= 0}
            >
              <i class="fas fa-minus" />
            </QuantityMinusButton>
            <div>
              <QuantityNum>{el.quantity}</QuantityNum>
            </div>
            <QuantityPlusButton
              onClick={() => plus(el.valueKey)}
              disabled={
                currentPeople.adult +
                  currentPeople.child +
                  currentPeople.baby >=
                capacity
              }
            >
              <i class="fas fa-plus" />
            </QuantityPlusButton>
          </div>
        </Flexcontainer>
      ))}
      <p>유아도 숙박인원에 포함됩니다.</p>
      <CloseBtn onClick={handleModal}>닫기</CloseBtn>
    </StyledQuantityModal>
  );
};

const StyledQuantityModal = styled.div`
  position: absolute;
  top: 172px;
  left: 0;
  width: 310px;
  padding: 30px;
  margin-left: 25px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  z-index: 9;
  cursor: default;

  p {
    margin-bottom: 20px;
    color: #666;
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Flexcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }

  div:last-child {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .fa-minus,
  .fa-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 15px;
    color: #888;
  }
`;

const QuantityNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

const QuantityMinusButton = styled.button`
  border: ${({ disabled }) => (disabled ? '1px solid #eee' : '1px solid #888')};
  border-radius: 30px;
  cursor: pointer;
`;

const QuantityPlusButton = styled.button`
  border: ${({ disabled }) => (disabled ? '1px solid #eee' : '1px solid #888')};
  border-radius: 30px;
  cursor: pointer;
`;

const CloseBtn = styled.div`
  display: inline-block;
  margin-left: 88%;
  text-decoration: underline;
  cursor: pointer;
`;

export default QuantityModal;
