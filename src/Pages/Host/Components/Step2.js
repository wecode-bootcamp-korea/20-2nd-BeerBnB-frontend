import React from 'react';
import styled from 'styled-components/macro';

const Step2 = ({ setCurrentPage, setInputValue, inputValue }) => {
  const changeOption = e => {
    const { name } = e.target;
    inputValue.amenity.includes(name)
      ? setInputValue({
          ...inputValue,
          amenity: inputValue.amenity.filter(drink => drink !== name),
        })
      : setInputValue({
          ...inputValue,
          amenity: [...inputValue.amenity, name],
        });
  };

  const decreaseStay = e => {
    const { name } = e.currentTarget;
    if (inputValue[name] < 1) return;
    setInputValue({
      ...inputValue,
      [name]: inputValue[name] - 1,
    });
  };

  const increaseStay = e => {
    const { name } = e.currentTarget;
    setInputValue({
      ...inputValue,
      [name]: inputValue[name] + 1,
    });
  };

  return (
    <StyledHostPage>
      <StyledHostStart>
        <section>
          <StyledStep>
            <StyledCurrentPage>2단계</StyledCurrentPage>
            <StyledQuestion>어떤 편의시설을 제공하시나요?</StyledQuestion>
            <StyledDirection>
              일반적으로 게스트가 기대하는 편의시설 목록입니다. 숙소를 등록한 후
              언제든 편의시설을 추가할 수 있어요.
            </StyledDirection>
            <StyledOption>
              <StyledCheck>
                <input type="checkbox" name="필수품목" id="필수품목" />
                <div>
                  <StyledCategory htmlFor="필수품목">
                    필수 품목
                    <StyledSubCategory>
                      수건, 침대 시트, 비누, 화장지, 베개
                    </StyledSubCategory>
                  </StyledCategory>
                </div>
              </StyledCheck>
              <StyledCheck>
                <input type="checkbox" name="기본조리도구" id="기본조리도구" />
                <div>
                  <StyledCategory htmlFor="기본조리도구">
                    기본 조리 도구
                    <StyledSubCategory>
                      후라이팬, 기름, 와인잔, 병따개
                    </StyledSubCategory>
                  </StyledCategory>
                </div>
              </StyledCheck>
              <StyledCheck>
                <input type="checkbox" name="에어컨" id="에어컨" />
                <StyledCategory htmlFor="에어컨">에어컨</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input type="checkbox" name="TV" id="TV" />
                <StyledCategory htmlFor="TV">TV</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input type="checkbox" name="무선인터넷" id="무선인터넷" />
                <StyledCategory htmlFor="무선인터넷">무선인터넷</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input type="checkbox" name="조식" id="조식" />
                <StyledCategory htmlFor="조식">조식</StyledCategory>
              </StyledCheck>
            </StyledOption>
            <StyledQuestion>어떤 주종을 제공하시나요?</StyledQuestion>
            <StyledDirection>
              일반적으로 게스트가 기대하는 주류 목록입니다.
            </StyledDirection>
            <StyledOption>
              <StyledCheck>
                <input
                  type="checkbox"
                  name="비어"
                  id="비어"
                  onChange={changeOption}
                />
                <StyledCategory htmlFor="비어">비어</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input
                  type="checkbox"
                  name="위스키"
                  id="위스키"
                  onChange={changeOption}
                />
                <StyledCategory htmlFor="위스키">위스키</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input
                  type="checkbox"
                  name="와인"
                  id="와인"
                  onChange={changeOption}
                />
                <StyledCategory htmlFor="와인">와인</StyledCategory>
              </StyledCheck>
              <StyledCheck>
                <input
                  type="checkbox"
                  name="칵테일"
                  id="칵테일"
                  onChange={changeOption}
                />
                <StyledCategory htmlFor="칵테일">칵테일</StyledCategory>
              </StyledCheck>
            </StyledOption>
          </StyledStep>
          <StyledStep>
            <StyledQuestion>
              게스트가 얼마 동안 숙박할 수 있나요?
            </StyledQuestion>
            <StyledDuration>
              <StyledDurationSelection>
                <label htmlFor="min">최소 숙박일</label>
                <div>
                  <input
                    type="text"
                    placeholder="최소숙박일"
                    id="min"
                    value={`${inputValue.min_date} 박`}
                  />
                  <button name="min_date" onClick={decreaseStay}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <button name="min_date" onClick={increaseStay}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </StyledDurationSelection>
              <StyledDurationSelection>
                <label htmlFor="max">최대 숙박일</label>
                <div>
                  <input
                    type="text"
                    placeholder="최대숙박일"
                    id="max"
                    value={`${inputValue.max_date} 박`}
                  />
                  <button name="max_date" onClick={decreaseStay}>
                    <i class="fas fa-minus"></i>
                  </button>
                  <button name="max_date" onClick={increaseStay}>
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </StyledDurationSelection>
            </StyledDuration>
          </StyledStep>
        </section>
        <aside>
          <img
            src="https://a0.muscache.com/airbnb/static/packages/calendar.f2586c5e.png"
            alt="에어비엔비"
          />
        </aside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn onClick={() => setCurrentPage(1)}>뒤로</StyledPrevtBtn>
        <StyledNextBtn onClick={() => setCurrentPage(3)}>계속</StyledNextBtn>
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

  section {
    flex: 1;
    margin-right: 40px;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 460px;
      height: 640px;
    }
  }
`;

const StyledStep = styled.div`
  margin: 10px 0 25px;
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

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 21px;
    height: 21px;
    margin-right: 15px;
  }
`;

const StyledCheck = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`;

const StyledCategory = styled.label``;

const StyledSubCategory = styled.div`
  color: grey;
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 5px;
`;

const StyledDuration = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const StyledDurationSelection = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: grey;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  div {
    padding: 0 12px;
    margin-right: 10px;
    border: 1px solid #333;
    border-radius: 10px;
  }

  input {
    width: 100px;
    border-radius: 10px;
    font-size: 16px;

    &::placeholder {
      margin-left: 10px;
    }
  }

  button {
    width: 40px;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
  }
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

export default Step2;
