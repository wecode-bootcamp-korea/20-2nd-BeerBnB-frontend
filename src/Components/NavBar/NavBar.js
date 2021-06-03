import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../Profile/ProfileImg';
import ProfileLogin from '../Profile/ProfileLogin';
import ProfileLogout from '../Profile/ProfileLogout';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(
    !!localStorage.getItem('access_token')
  );

  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <LogoImg src="/images/logo.png" />
      <NavBtn>
        <button>숙소</button>
        <button>체험</button>
        <button>온라인 체험</button>
      </NavBtn>
      <ProfileContainer>
        <MenuImg onClick={MenuOpen} />
        <ProfileImg />
        {isMenuOpen &&
          (isLogin ? (
            <ProfileLogout
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setIsLogin={setIsLogin}
            />
          ) : (
            <ProfileLogin
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setIsLogin={setIsLogin}
            />
          ))}
      </ProfileContainer>
    </NavContainer>
  );
}
export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  button {
    font-size: ${props => props.theme.fontSizes.m};
    cursor: pointer;
    margin: 0px 10px 0px 10px;
  }
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 60px 0px 0px 80px;
`;

const NavBtn = styled.div`
  display: flex;
  flex-direction: row;
  div {
    padding: 0px 15px 0px 15px;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 80px 0px 0px;
  width: 75px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 30px 30px;
  background-color: white;
  cursor: pointer;
`;

const MenuImg = styled.img.attrs(() => ({
  alt: '메뉴버튼',
  src: '/images/menu.png',
}))`
  width: 13px;
  height: 13px;
  margin: 0px 0px 0px 5px;
`;

const MenuBtn = styled.button`
  width: 13px;
  height: 13px;
  margin: 0px 0px 0px 5px;
`;
