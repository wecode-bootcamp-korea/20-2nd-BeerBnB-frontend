import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  let history = useHistory();

  const KakaoLogin = () => {
    console.log('clicked');
    window.Kakao.Auth.login({
      success: authObj => {
        fetch('http://localhost/users/kakao', {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.token) {
              localStorage.setItem('Access_token', res.token);
              console.log('로그인');
              history.push('/');
            } else {
              console.log('실패');
            }
          });
      },
    });
  };
  return <LoginBtn src="/images/login.png" onClick={KakaoLogin} />;
}

const LoginBtn = styled.img``;

export default withRouter(Login);
