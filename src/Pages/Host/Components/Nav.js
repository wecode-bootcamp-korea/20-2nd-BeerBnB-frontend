import React from 'react';
import styled from 'styled-components/macro';

const Nav = ({ currentPage }) => {
  return (
    <StyledHostNav>
      <StyledLogo src="/images/greenlogo.png" alt="logo"></StyledLogo>
      <StyledProgressStatus style={{ width: `${currentPage * 20}%` }} />
    </StyledHostNav>
  );
};

const StyledHostNav = styled.nav`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid #ebebeb;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
  width: 50px;
  height: 50px;
`;

const StyledProgressStatus = styled.div`
  height: 10px;
  margin-top: 50px;
  background-color: #3fcaa1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 1s ease;
`;

export default Nav;
