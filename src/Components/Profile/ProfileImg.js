import React from 'react';
import styled from 'styled-components';

function ProfileImg() {
  return <Profile src="/images/profile.png" />;
}
export default ProfileImg;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;
