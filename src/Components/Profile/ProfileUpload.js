import React, { useState } from 'react';
import styled from 'styled-components';
import { USER_BASE_URL } from '../../config';

function ProfileUpload() {
  const [selectFile, setSelectFile] = useState('');
  const fileSelect = e => {
    setSelectFile(e.target.files[0]);
  };
  const fileUpload = path => {
    const profileImg = new FormData();
    profileImg.append('profile_file', selectFile);

    fetch(`${USER_BASE_URL}/user/${path}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: profileImg,
    }).then(res => console.log(res.json()));
  };
  return (
    <Container>
      <label for="input-file">프로필 사진</label>
      <File type="file" id="input-file" onChange={fileSelect} />
      <Upload onClick={fileUpload('upload')}>추가</Upload>
      <Update onClick={fileUpload('update')}>수정</Update>
      <Delete onClick={fileUpload('delete')}>삭제</Delete>
    </Container>
  );
}
export default ProfileUpload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
    padding: 0px;
  }
`;
const Button = styled.button`
  padding: 7px 0px 7px 0px;
  :hover {
    border-radius: 40px;
    background-color: ${props => props.theme.colors.pointColor};
  }
`;
const Upload = styled(Button)``;
const Update = styled(Button)``;
const Delete = styled(Button)``;
const File = styled.input`
  display: none;
`;
