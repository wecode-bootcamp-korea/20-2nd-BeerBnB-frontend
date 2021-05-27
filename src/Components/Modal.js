import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = ({ children, top, right, bottom, left }) => {
  return createPortal(
    <StyledModal top={top} right={right} bottom={bottom} left={left}>
      <SytledModalBox>{children}</SytledModalBox>
      <StyledModalBtn></StyledModalBtn>
    </StyledModal>,
    modalRoot
  );
};

const modalRoot = document.querySelector('#modalRoot');

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: 100;
`;

const SytledModalBox = styled.div`
  min-width: 360px;
  min-height: 150px;
  padding: 20px;
  background: rgb(255, 255, 255);
  border: 1px solid ${({ theme }) => theme.colors.borderColorDark};
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
`;

const StyledModalBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.textColor};
  color: white;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export default Modal;
