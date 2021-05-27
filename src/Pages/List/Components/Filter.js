import React, { useState, useEffect } from 'react';
import Refund from './Refund';
import RoomType from './RoomType';
import Price from './Price';
import SuperHost from './SuperHost';
import Drink from './Drink';
import styled from 'styled-components';

const Filter = () => {
  const [selectedTooltip, setSeletedTooltip] = useState(null);

  const toggleTooltip = item => {
    setSeletedTooltip(item);
  };

  const sendToServer = data => {
    setSeletedTooltip(null);
    //server에 전송 logic
  };

  return (
    <StyledFilter>
      <Refund
        toggleTooltip={toggleTooltip}
        sendToServer={sendToServer}
        value="Refund"
        selectedTooltip={selectedTooltip}
      />
      <RoomType
        toggleTooltip={toggleTooltip}
        sendToServer={sendToServer}
        value="RoomType"
        selectedTooltip={selectedTooltip}
      />
      <Price
        toggleTooltip={toggleTooltip}
        sendToServer={sendToServer}
        value="Price"
        selectedTooltip={selectedTooltip}
      />
      <SuperHost
        toggleTooltip={toggleTooltip}
        sendToServer={sendToServer}
        value="SuperHost"
        selectedTooltip={selectedTooltip}
      />
      <Drink
        toggleTooltip={toggleTooltip}
        sendToServer={sendToServer}
        value="Drink"
        selectedTooltip={selectedTooltip}
      />
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export default Filter;
