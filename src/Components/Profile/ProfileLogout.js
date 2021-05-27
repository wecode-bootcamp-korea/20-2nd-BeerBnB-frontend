import React from 'react';
import styled from 'styled-components';
import ProfileUpload from './ProfileUpload';

function ProfileLogout(props) {
  const { setIsMenuOpen, setIsLogin } = props;
  const SocialLogout = () => {
    setIsLogin(false);
    localStorage.clear();
  };

  return (
    <Container>
      <ProfileUpload />
      <div onClick={SocialLogout}>로그아웃</div>
      <div>숙소 호스트 되기</div>
      {/* <div>체험 호스팅하기</div> */}
    </Container>
  );
}
export default ProfileLogout;

const Container = styled.div`
  position: absolute;
  padding: 5px 0px 0px 0px;
  border-radius: 15px;
  top: 50px;
  right: 0px;
  width: 240px;
  height: 240px;
  background-color: white;
  div {
    padding: 15px 0px 15px 15px;
    font-size: ${props => props.theme.fontSizes.m};
    :hover {
      background-color: #fff1eb;
      border-radius: 20px;
    }
    :nth-child(1) {
      font-weight: bold;
    }
    :nth-child(2) {
      border-bottom: 1px solid #dddddd;
    }
    :nth-child(3) {
      margin-top: 10px;
    }
  }
`;
