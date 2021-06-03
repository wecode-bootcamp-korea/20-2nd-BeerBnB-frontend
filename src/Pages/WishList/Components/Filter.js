import React from 'react';
import Refund from './Refund';
import RoomType from './RoomType';
import Price from './Price';
import SuperHost from './SuperHost';
import Drink from './Drink';
import styled from 'styled-components';

const Filter = ({
  selectedTooltip,
  toggleTooltip,
  setFilteredCondition,
  filteredCondition,
  setSeletedTooltip,
  filteredArrayTypeCondition,
  setFilteredArrayTypeCondition,
}) => {
  return (
    <StyledFilter>
      <Refund
        value="Refund"
        selectedTooltip={selectedTooltip}
        setSeletedTooltip={setSeletedTooltip}
        filteredCondition={filteredCondition}
        setFilteredCondition={setFilteredCondition}
      />
      <RoomType
        value="RoomType"
        selectedTooltip={selectedTooltip}
        setSeletedTooltip={setSeletedTooltip}
        filteredArrayTypeCondition={filteredArrayTypeCondition}
        setFilteredArrayTypeCondition={setFilteredArrayTypeCondition}
      />
      <Price
        value="Price"
        selectedTooltip={selectedTooltip}
        setSeletedTooltip={setSeletedTooltip}
        filteredCondition={filteredCondition}
        setFilteredCondition={setFilteredCondition}
      />
      <SuperHost
        value="SuperHost"
        selectedTooltip={selectedTooltip}
        setSeletedTooltip={setSeletedTooltip}
        filteredCondition={filteredCondition}
        setFilteredCondition={setFilteredCondition}
      />
      <Drink
        value="Drink"
        selectedTooltip={selectedTooltip}
        setSeletedTooltip={setSeletedTooltip}
        filteredArrayTypeCondition={filteredArrayTypeCondition}
        setFilteredArrayTypeCondition={setFilteredArrayTypeCondition}
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
