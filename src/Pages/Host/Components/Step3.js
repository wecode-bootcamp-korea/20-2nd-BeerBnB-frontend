import React, { useRef } from 'react';
import styled from 'styled-components';
import CountryDropDown from './CountryDropDown';
import Postcode from './Postcode';

const Step3 = ({ setCurrentPage, setInputValue, inputValue }) => {
  const saveAddress = () =>
    setInputValue({ ...inputValue, address: inputRef.current.value });

  const inputRef = useRef();
  const changeToCurrency = data => {
    return data.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <StyledHostPage>
      <StyledHostStart>
        <section>
          <StyledStep>
            <StyledCurrentPage>3단계</StyledCurrentPage>
            <StyledQuestion>숙소의 위치를 알려주세요.</StyledQuestion>
            <StyledDirection>
              정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
            </StyledDirection>
            <StyledAddress>
              <CountryDropDown />
              <Postcode
                setInputValue={setInputValue}
                inputValue={inputValue}
                saveAddress={saveAddress}
                inputRef={inputRef}
              />
            </StyledAddress>
          </StyledStep>

          <StyledStep>
            <StyledQuestion>하루 숙박 비용은 얼마인가요?</StyledQuestion>
            <StyledDirection>
              스마트 요금 기능을 사용하지 않을 때 적용되는 기본 요금입니다.
            </StyledDirection>
            <StyledInput>
              <input
                type="text"
                placeholder="기본요금"
                onChange={e => {
                  setInputValue({ ...inputValue, price: e.target.value });
                  changeToCurrency(e.target.value);
                }}
                id="요금"
                // value={`₩${inputValue.price}`}
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency"
                placeholder="₩100,000"
              />
            </StyledInput>
          </StyledStep>
          <StyledStep>
            <StyledQuestion>유연한 환불 정책</StyledQuestion>
            <StyledInput>
              <select
                onChange={e =>
                  setInputValue({ ...inputValue, is_refund: e.target.value })
                }
              >
                <option selected disabled hidden>
                  동의하십니까?
                </option>
                <option value="true">동의</option>
                <option value="false">비동의</option>
              </select>
            </StyledInput>
          </StyledStep>
        </section>
        <aside>
          <img src="/images/PngItem_1769385.png" alt="에어비엔비" />
        </aside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn onClick={() => setCurrentPage(2)}>뒤로</StyledPrevtBtn>
        <StyledNextBtn onClick={() => setCurrentPage(4)}>계속</StyledNextBtn>
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
      width: 600px;
    }
  }
`;

const StyledStep = styled.div`
  margin: 10px 0 40px;
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

const StyledAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  label {
    margin-bottom: 10px;
  }

  input {
    width: 410px;
    height: 40px;
    padding: 0 12px;
    margin-bottom: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    cursor: pointer;

    &:focus::not([type='button']) {
      border: 1px solid black;
    }
  }
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select {
    width: 300px;
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

    select {
      color: ${({ theme }) => theme.colors.borderColor};
    }

    option {
      height: 50px;
      font-size: 16px;
      padding: 5px;
      margin-bottom: 5px;
    }
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

export default Step3;
