import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { USER_BASE_URL } from '../../../../config';
const { Kakao } = window;

function Login() {
  const history = useHistory();

  const SocialLogout = () => {
    localStorage.clear();
  };

  const SocialLogin = () => {
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
            if (res.MESSAGE === 'success') {
              Kakao.Auth.logout();
              history.push('/');
              alert('환영합니다');
            } else {
              history.push('/');
              alert('서버점검중 00:00~24:00');
            }
          });
      },
      fail: error => {
        alert('로그인 실패');
      },
    });
  };
  return (
    <Container>
      <LoginBtn src="/images/login.png" onClick={SocialLogin} />
      <LogoutBtn onClick={SocialLogout}>로그아웃</LogoutBtn>
    </Container>
  );
}
const Container = styled.div``;
//스타일속성 부여할거에요!
const LoginBtn = styled.img``;

const LogoutBtn = styled.div``;

export default Login;
