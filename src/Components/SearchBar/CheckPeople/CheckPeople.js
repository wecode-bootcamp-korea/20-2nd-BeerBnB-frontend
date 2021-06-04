import React from 'react';
import styled from 'styled-components';

function CheckPeople(props) {
  const { currentPeople, setCurrentPeople } = props;
  const peopleCheck = [
    { title: '성인', value: 'adult', quantity: currentPeople.adult },
    { title: '어린이', value: 'child', quantity: currentPeople.child },
    { title: '유아', value: 'baby', quantity: currentPeople.baby },
  ];
  const plus = value => {
    console.log('plus');
    setCurrentPeople({
      ...currentPeople,
      [value]: currentPeople[value] + 1,
    });

    // setCurrentPeople(currentPeople.adult + 1);
  };
  const minus = value => {
    console.log('minus');
    setCurrentPeople(currentPeople.adult + 1);
    // setCurrentPeople({
    //   ...currentPeople,
    //   [value]: currentPeople[value] + 1,
    // });
  };

  return (
    <Container>
      <Check>
        <Text>
          <div>성인</div>
          <div>만13세 이상</div>
        </Text>
        <BtnContainer>
          <CalculateBtn onClick={() => minus(currentPeople.adult)}>
            <i class="fas fa-minus" />
          </CalculateBtn>
          <p>{currentPeople.adult}</p>
          <CalculateBtn onclick={() => plus(currentPeople.adult)}>
            <i class="fas fa-plus" />
          </CalculateBtn>
        </BtnContainer>
      </Check>
      <Check>
        <Text>
          <div>성인</div>
          <div>만2세~12세</div>
        </Text>
        <BtnContainer>
          <CalculateBtn>
            <i class="fas fa-minus" />
          </CalculateBtn>
          <p>{currentPeople.child}</p>
          <CalculateBtn>
            <i class="fas fa-plus" />
          </CalculateBtn>
        </BtnContainer>
      </Check>
      <Check>
        <Text>
          <div>유아</div>
          <div>만2세 미만</div>
        </Text>
        <BtnContainer>
          <CalculateBtn>
            <i class="fas fa-minus" />
          </CalculateBtn>
          <p>{currentPeople.baby}</p>
          <CalculateBtn>
            <i class="fas fa-plus" />
          </CalculateBtn>
        </BtnContainer>
      </Check>
    </Container>
  );
}

export default CheckPeople;
const BtnContainer = styled.div``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(2) {
    margin-top: 5px;
    font-size: ${props => props.theme.fontSizes.s};
    color: #888;
  }
`;

const Check = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0px 0px 0px;
  div:last-child {
    display: flex;

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

const Container = styled.div`
  position: absolute;
  border-radius: 40px;
  top: 160px;

  /* right: 300px; */
  width: 350px;
  height: 250px;
  background-color: white;
`;
const CalculateBtn = styled.button`
  border: 1px solid #888;
  border-radius: 40px;
  cursor: pointer;
`;
