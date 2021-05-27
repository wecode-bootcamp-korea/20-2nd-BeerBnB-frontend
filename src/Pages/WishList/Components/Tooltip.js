import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ children }) => {
  return <StyledTooltip>{children}</StyledTooltip>;
};

const StyledTooltip = styled.div`
  position: absolute;
  top: 45px;
  min-width: 360px;
  min-height: 150px;
  background: rgb(255, 255, 255);
  border: 1px solid ${({ theme }) => theme.colors.borderColorDark};
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: left;
  line-height: 1.5em;
  z-index: 100;
`;
export default Tooltip;
