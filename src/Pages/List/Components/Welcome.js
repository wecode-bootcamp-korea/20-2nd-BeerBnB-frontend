import React from 'react';
import styled from 'styled-components/macro';

const Welcome = () => {
  return (
    <>
      <StyledSubTitle>
        여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
      </StyledSubTitle>
      <StyledData>
        <img
          src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
          alt="crown"
        />
        <div>390,000명의 게스트가 서울의 숙소에 머물렀습니다. </div>
        <span>
          게스트는 평균적으로 이 숙소를 별 5개 만점에 4.7점으로 평가했습니다.
        </span>
      </StyledData>
    </>
  );
};

const StyledSubTitle = styled.h3`
  margin-bottom: 30px; //추가하기
  color: #949594;
`;

const StyledData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSizes.m};

  img {
    width: 40px;
    height: 40px;
  }
  div {
    font-weight: bold;
  }
`;

export default Welcome;
