import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Nav>
      <LogoImg alt="로고" src="/images/logo.png" />
      <NavBtn>
        <div>숙소</div>
        <div>체험</div>
        <div>온라인 체험</div>
      </NavBtn>
      <ButtonWrapper>
        <Menu alt="메뉴버튼" src="/images/menu.png" />
        <Profile alt="프로필사진" src="/images/profile.png" />
      </ButtonWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 60px 0px 0px 80px;
`;

const NavBtn = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    padding: 0px 15px 0px 15px;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 80px 0px 0px;
  width: 75px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 30px 30px;
  background-color: #ffffff;
`;

const Menu = styled.img`
  width: 13px;
  height: 13px;
  margin: 0px 0px 0px 5px;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

export default NavBar;
