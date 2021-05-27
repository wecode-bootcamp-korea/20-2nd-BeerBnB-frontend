import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { USER_BASE_URL } from '../../config';
const { Kakao } = window;

function ProfileLogin(props) {
  const history = useHistory();
  const { setIsMenuOpen, setIsLogin, isMenuOpen } = props;
  console.log(isMenuOpen);

  const SocialLogin = () => {
    setIsLogin(true);
    Kakao.Auth.login({
      scope: 'account_email, gender, birthday',
      success: res => {
        fetch(`${USER_BASE_URL}/user/kakao`, {
          method: 'GET',
          headers: {
            Authorization: res.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('access_token', res.access_token);
            if (res.message === 'created user') {
              Kakao.Auth.logout();
              history.push('/');
              alert('환영합니다');
            } else {
              history.push('/');
              alert('서버점검중 00:00~24:00');
            }
          });
      },
      fail: () => {
        alert('로그인 실패');
      },
    });
  };

  return (
    <Container>
      <div>회원가입</div>
      <div onClick={SocialLogin}>카카오 로그인</div>
      <div>숙소 호스트 되기</div>
      <div>체험 호스팅하기</div>
      <div>도움말</div>
    </Container>
  );
}
export default ProfileLogin;

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
