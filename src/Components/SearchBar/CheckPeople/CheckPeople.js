import React from 'react';
import styled from 'styled-components';

function CheckPeople() {
  return (
    <Container>
      <Check>
        <Text>
          <div>성인</div>
          <div>만13세 이상</div>
        </Text>
        <div>
          <CalculateBtn name="adult_plus">
            <i class="fas fa-minus" />
          </CalculateBtn>
          <div>
            <p>현재인원</p>
          </div>
          <CalculateBtn>
            <i class="fas fa-plus" />
          </CalculateBtn>
        </div>
      </Check>
    </Container>
  );
}

export default CheckPeople;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(2) {
    color: #888;
  }
`;

const Check = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:last-child {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      padding: 20px 20px 0;
    }
  }
  .fa-minus,
  .fa-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 15px;
    color: black;
  }
`;

const Container = styled.div`
  position: absolute;
  border-radius: 40px;
  top: 160px;
  right: 300px;
  width: 400px;
  height: 250px;
  background-color: white;
`;
const CalculateBtn = styled.button`
  border: 1px solid black;
  border-radius: 40px;
  cursor: pointer;
`;
