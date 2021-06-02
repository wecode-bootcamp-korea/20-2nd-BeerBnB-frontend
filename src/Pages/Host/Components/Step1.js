import React from 'react';
import styled from 'styled-components/macro';

const Step1 = ({ setCurrentPage, inputValue, setInputValue }) => {
  const decreaseCapacity = e => {
    const { name } = e.currentTarget;
    if (inputValue[name] < 1) return;
    setInputValue({
      ...inputValue,
      [name]: inputValue[name] - 1,
    });
  };

  const increaseCapacity = e => {
    const { name } = e.currentTarget;
    setInputValue({
      ...inputValue,
      [name]: inputValue[name] + 1,
    });
  };

  return (
    <StyledHostPage>
      <StyledHostStart>
        <StyledSection>
          <StyledTitle>
            Rich님 안녕하세요!
            {/* 로그인 한 이름 연결하기 */}
            <br />
            숙소 등록을 시작해 볼까요?
          </StyledTitle>
          <StyledStep>
            <StyledCurrentPage>1단계</StyledCurrentPage>
            <StyledQuestion>
              숙소의 특징과 장점을 강조하는 제목으로 게스트의 관심을 끌어보세요.
            </StyledQuestion>
            <StyledInput>
              <input
                type="text"
                placeholder="숙소 제목"
                onChange={e =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
              />
            </StyledInput>
          </StyledStep>
          <StyledStep>
            <StyledQuestion>
              숙소의 위치를 숙소의 건물 유형을 선택해주세요.
            </StyledQuestion>
            <StyledInput>
              <select
                onChange={e =>
                  setInputValue({ ...inputValue, category: e.target.value })
                }
              >
                <option selected disabled hidden>
                  하나를 선택해주세요
                </option>
                <option value="아파트">아파트</option>
                <option value="호텔">호텔</option>
                <option value="별채">별채</option>
                <option value="주택">주택</option>
              </select>
              {inputValue.category && (
                <input type="text" placeholder="동호수(선택사항)" />
              )}
            </StyledInput>
          </StyledStep>

          <StyledStep>
            <StyledQuestion>
              숙소에 얼마나 많은 인원이 숙박할 수 있나요?
            </StyledQuestion>
            <StyledDirection>
              모든 게스트가 편안하게 숙박할 수 있도록 침대가 충분히 구비되어
              있는지 확인하세요
            </StyledDirection>
            <StyledSelection>
              <StyledSelectionTitle>최대 숙박 인원</StyledSelectionTitle>

              <StyledCapacity>
                <StyledSelectionBtn>
                  <StyledAge>성인</StyledAge>

                  <StyledAgeBtn name="adult" onClick={decreaseCapacity}>
                    <i className="fas fa-minus" />
                  </StyledAgeBtn>
                  <StyledCapacityValue>{inputValue.adult}</StyledCapacityValue>
                  <StyledAgeBtn name="adult" onClick={increaseCapacity}>
                    <i className="fas fa-plus" />
                  </StyledAgeBtn>
                </StyledSelectionBtn>

                <StyledSelectionBtn>
                  <StyledAge>어린이</StyledAge>
                  <StyledAgeBtn name="children" onClick={decreaseCapacity}>
                    <i className="fas fa-minus" />
                  </StyledAgeBtn>
                  <StyledCapacityValue>
                    {inputValue.children}
                  </StyledCapacityValue>
                  <StyledAgeBtn name="children" onClick={increaseCapacity}>
                    <i className="fas fa-plus" />
                  </StyledAgeBtn>
                </StyledSelectionBtn>
              </StyledCapacity>
            </StyledSelection>
          </StyledStep>
        </StyledSection>
        <StyledAside>
          <StyledSideImg
            src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
            alt="에어비엔비"
          />
        </StyledAside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn></StyledPrevtBtn>
        <StyledNextBtn onClick={() => setCurrentPage(2)}>계속</StyledNextBtn>
      </StyledBtn>
    </StyledHostPage>
  );
};

const StyledHostPage = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 10px 30px;
`;

const StyledHostStart = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 730px;
`;

const StyledSection = styled.section`
  flex: 1;
  margin-right: 40px;
`;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSideImg = styled.img`
  width: 480px;
`;

const StyledTitle = styled.h1`
  margin: 30px 0 60px;
  color: transparent;
  font-size: 42px;
  font-weight: bold;
  line-height: 1.5;
  background: linear-gradient(66deg, #3fcaa1 0%, #32a180 54%, #0c261e 100%);
  background-clip: text;
  -webkit-background-clip: text;
`;

const StyledStep = styled.div`
  margin: 30px 0 40px;
`;

const StyledCurrentPage = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: gray;
`;

const StyledQuestion = styled.h2`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
`;

const StyledDirection = styled.div`
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select {
    width: 450px;
    height: 40px;
    padding: 5px 15px;
    margin-bottom: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    appearance: none;

    &:focus {
      border: 1px solid black;
    }
  }

  option {
    height: 50px;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const StyledSelection = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledSelectionTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledCapacity = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

const StyledSelectionBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledAge = styled.span`
  width: 45px;
  margin-right: 15px;
  text-align: center;
  color: gray;
`;

const StyledAgeBtn = styled.button`
  width: 32px;
  height: 32px;
  border: 1.5px solid #3fcaa1;
  border-radius: 50%;
  color: #3fcaa1;
  cursor: pointer;
`;

const StyledCapacityValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 32px;
  font-weight: bold;
`;

const StyledBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px;
`;

const StyledPrevtBtn = styled.button`
  color: #3fcaa1;
  font-size: inherit;
  cursor: pointer;
`;

const StyledNextBtn = styled.button`
  padding: 10px 15px;
  margin: 12px 0 28px;
  background-color: #3fcaa1;
  color: #fff;
  border-radius: 10px;
  font-size: inherit;
  cursor: pointer;
`;

export default Step1;
