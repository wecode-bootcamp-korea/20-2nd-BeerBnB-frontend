import React from 'react';
import styled from 'styled-components';

const ConfirmModal = ({
  handleConfirmModal,
  startDate,
  endDate,
  detailData,
  currentPeople,
}) => {
  console.log(startDate);
  return (
    <>
      <Overlay onClick={handleConfirmModal}></Overlay>
      <ConfirmSummary>
        <ConfirmTitle>
          <p>예약이 완료 되었습니다.</p>
        </ConfirmTitle>
        <SummaryBox>
          <ImgBox>
            <img alt="thumbnail" src={detailData.image} />
          </ImgBox>
          <ConfirmInfo>
            <p>{detailData.room_name}</p>
            <p>{detailData.address}</p>
            <p>성인: {currentPeople.adult}명</p>
            <p>어린이: {currentPeople.child}명</p>
            <p>유아: {currentPeople.baby}명</p>
          </ConfirmInfo>
        </SummaryBox>
        <CheckinoutBox>
          <Checkinout>
            <Date>
              <p>
                {startDate.getMonth() + 1} / {startDate.getDate()}
              </p>
            </Date>
            <Text>
              <p>Chcke In</p>
            </Text>
          </Checkinout>
          <Checkinout>
            <Date>
              <p>
                {endDate.getMonth() + 1} / {endDate.getDate()}
              </p>
            </Date>
            <Text>
              <p>Chcke Out</p>
            </Text>
          </Checkinout>
        </CheckinoutBox>
        <ConfirmBtn onClick={handleConfirmModal}>확인</ConfirmBtn>
      </ConfirmSummary>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.7;
`;

const ConfirmSummary = styled.div`
  position: fixed;
  top: 22.5%;
  right: 50%;
  transform: translateX(50%);
  width: 40%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
`;

const ConfirmTitle = styled.h3`
  font-size: 24px;
`;

const CheckinoutBox = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Checkinout = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
`;

const Date = styled.div`
  padding: 12px;
  margin-right: 15px;
  background-color: #eee;
  border-radius: 5px;

  p {
    font-weight: 600;
  }
`;

const Text = styled.div`
  p {
    font-size: 18px;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ImgBox = styled.div`
  width: 30%;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ConfirmInfo = styled.div`
  width: 65%;
  p {
    line-height: 23px;
    color: #444;
    font-size: 14px;

    &:first-child {
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }

    &:nth-child(2) {
      margin-bottom: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
  }
`;

const ConfirmBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.pointColor};
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;

export default ConfirmModal;
