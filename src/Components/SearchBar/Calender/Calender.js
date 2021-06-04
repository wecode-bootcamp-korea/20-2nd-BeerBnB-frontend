import React, { useState } from 'react';
import styled from 'styled-components';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './Calender.css';
import 'moment/locale/ko';

function Calender(props) {
  const [focusedInput, setFocusedInput] = useState('startDate');
  const { setCheckInDay, setCheckOutDay, checkInDay, checkOutDay } = props;

  return (
    <CalenderContainer>
      <DayPickerRangeController
        startDate={checkInDay}
        endDate={checkOutDay}
        onDatesChange={({ startDate, endDate }) => {
          setCheckInDay(startDate);
          setCheckOutDay(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput =>
          setFocusedInput(focusedInput || 'startDate')
        }
        numberOfMonths={2}
      />
    </CalenderContainer>
  );
}

export default Calender;

const CalenderContainer = styled.div`
  position: absolute;
  top: 160px;
`;
