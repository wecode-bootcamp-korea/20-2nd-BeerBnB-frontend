import React from 'react';
import styled from 'styled-components';

const Step5 = ({ setCurrentPage, sendToServer }) => {
  return (
    <StyledHostPage>
      <StyledHostStart>
        <section>
          <StyledTitle>
            축하드립니다! <br />
            <br />
            숙소 등록이 완료되었습니다!
          </StyledTitle>
          <StyledSummary></StyledSummary>
        </section>
        <aside>
          <img
            src="https://cdn.dribbble.com/users/1192925/screenshots/4171170/airbnb2.gif"
            alt="에어비엔비"
          />
        </aside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn onClick={() => setCurrentPage(4)}>뒤로</StyledPrevtBtn>
        <StyledNextBtn onClick={sendToServer}>등록완료</StyledNextBtn>
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
    display: flex;
    justify-content: center;
    align-items: center;
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

const StyledTitle = styled.h1`
  margin: 30px 0 60px;
  color: transparent;
  background: linear-gradient(66deg, #3fcaa1 0%, #32a180 54%, #0c261e 100%);
  font-size: 42px;
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text;
`;

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.m};
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
export default Step5;
