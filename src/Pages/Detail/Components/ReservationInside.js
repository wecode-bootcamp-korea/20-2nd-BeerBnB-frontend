import React, { useState } from 'react';
import QuantityModal from './QuantityModal';
import ConfirmModal from './ConfirmModal';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import 'moment/locale/ko';
import './Detail.css';
import { RESERV_POST_API } from '../../../config';

const ReservationInside = ({ price, detailData }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const [quantityModal, setQuantityModal] = useState(false);
  const [currentPeople, setCurrentPeople] = useState({
    adult: 1,
    child: 0,
    baby: 0,
  });
  const [confirmModal, setConfirmModal] = useState(false);

  const PostData = () => {
    fetch(`${RESERV_POST_API}/reservation`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        checkin: moment(startDate).format('YYYY-MM-DD'),
        checkout: moment(endDate).format('YYYY-MM-DD'),
        room: detailData.room_name,
        adult: currentPeople.adult,
        child: currentPeople.child,
      }),
    });
  };

  console.log(currentPeople.adult);

  const diffDateMs = startDate - endDate;
  const stay = (diffDateMs / (1000 * 60 * 60 * 24)) * -1;

  const handleModal = () => {
    setQuantityModal(!quantityModal);
  };

  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  return (
    <Container>
      <Title>
        {typeof endDate === 'string' ? (
          <p>
            요금을 확인하려면 날짜를
            <br />
            입력하세요.
          </p>
        ) : (
          `₩${(price * 1).toLocaleString()} / 박`
        )}
      </Title>
      <DateRangePicker
        startDate={startDate}
        startDateId="your_u nique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
      <Quantity onClick={handleModal}>
        <p>인원</p>
        <p>
          게스트
          {currentPeople.adult + currentPeople.child + currentPeople.baby}명
        </p>
      </Quantity>
      {quantityModal && (
        <QuantityModal
          handleModal={handleModal}
          detailData={detailData}
          currentPeople={currentPeople}
          setCurrentPeople={setCurrentPeople}
        />
      )}
      <ReservationBtn
        onClick={() => {
          handleConfirmModal();
          PostData();
        }}
      >
        {typeof endDate === 'string' ? (
          <p>예약 가능여부 보기</p>
        ) : (
          <p>예약 하기</p>
        )}
      </ReservationBtn>
      {confirmModal && (
        <ConfirmModal
          handleConfirmModal={handleConfirmModal}
          startDate={startDate._d}
          endDate={endDate._d}
          detailData={detailData}
          currentPeople={currentPeople}
          setCurrentPeople={setCurrentPeople}
        />
      )}
      {endDate && (
        <PriceInfo>
          <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
          <PriceDetail>
            <FlexBox>
              <div>
                <p>{`₩${(price * 1).toLocaleString()} x ${stay}박`}</p>
              </div>
              <div>
                <p>{`₩${(price * stay).toLocaleString()}`}</p>
              </div>
            </FlexBox>
            <FlexBox>
              <div>
                <p>서비스 수수료</p>
              </div>
              <div>
                <p>₩0</p>
              </div>
            </FlexBox>
            <FlexBox>
              <div>
                <p>숙박세와 수수료</p>
              </div>
              <div>
                <p>₩0</p>
              </div>
            </FlexBox>
          </PriceDetail>
          <TotalPrice>
            <div>
              <p>총 합계</p>
            </div>
            <div>
              <p>{`₩${(price * stay).toLocaleString()}`}</p>
            </div>
          </TotalPrice>
        </PriceInfo>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 25px;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 25px;
`;

const ReservationBtn = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.pointColor};
  border-radius: 10px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

const Quantity = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  p:first-child {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:last-child {
    font-size: 13px;
  }
`;

const PriceInfo = styled.div`
  & > p {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const PriceDetail = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #555;
  font-weight: 300;
  text-decoration: underline;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ReservationInside;
