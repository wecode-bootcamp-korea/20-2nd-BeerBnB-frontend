import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Step4 = ({ setCurrentPage, setInputValue }) => {
  const [roomImgSrc, setRoomImgSrc] = useState(null);
  const [roomSubImgSrc, setRoomSubImgSrc] = useState(null);
  const [roomSubImgSrc2, setRoomSubImgSrc2] = useState(null);

  const previewMainImg = e => {
    setRoomImgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const previewSubImg = e => {
    setRoomSubImgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const previewSubImg2 = e => {
    setRoomSubImgSrc2(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <StyledHostPage>
      <StyledHostStart>
        <section>
          <StyledStep>
            <span>4단계</span>
            <StyledQuestion>
              멋진 사진으로 숙소가 돋보이게 해주세요.
            </StyledQuestion>
            <StyledDirection>
              휴대전화나 카메라를 사용하여 사진을 찍으세요. 숙소를 등록하려면
              1장 이상의 사진을 업로드하세요. 원하는 대로 드래그하여 사진 배치
              순서를 결정할 수 있습니다. 언제든 사진을 추가하거나 수정하실 수
              있습니다.
            </StyledDirection>
            <StyledMainRoomImg>
              <input
                type="file"
                onChange={e => previewMainImg(e)}
                name=""
                id="mainImage"
                accept=".jpg, .jpeg, .png"
              />
              <label htmlFor="mainImage">
                <i class="fas fa-cloud-upload-alt" />
                사진 업로드
              </label>
              {roomImgSrc && <img src={roomImgSrc} alt="방이미지" />}
            </StyledMainRoomImg>
            <StyledSubRoomImgWrapper>
              {roomImgSrc && (
                <StyledSubRoomImg>
                  <input
                    type="file"
                    onChange={e => previewSubImg(e)}
                    name=""
                    id="subImg"
                    accept=".jpg, .jpeg, .png"
                  />
                  <label htmlFor="subImg">
                    <i class="fas fa-cloud-upload-alt" />
                    사진 업로드
                  </label>
                  {roomSubImgSrc && <img src={roomSubImgSrc} alt="방이미지" />}
                </StyledSubRoomImg>
              )}
              {roomSubImgSrc && (
                <StyledSubRoomImg>
                  <input
                    type="file"
                    onChange={e => previewSubImg2(e)}
                    name=""
                    id="subImg2"
                    accept=".jpg, .jpeg, .png"
                    multiple
                  />
                  <label htmlFor="subImg2">
                    <i class="fas fa-cloud-upload-alt" />
                    사진 업로드
                  </label>
                  {roomSubImgSrc2 && (
                    <img
                      src={roomSubImgSrc2}
                      alt="방이미지"
                      onLoad={URL.revokeObjectURL}
                    />
                  )}
                </StyledSubRoomImg>
              )}
            </StyledSubRoomImgWrapper>
          </StyledStep>
        </section>
        <aside>
          <img src="/images/PngItem_1769236.png" alt="에어비엔비" />
        </aside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn onClick={() => setCurrentPage(3)}>뒤로</StyledPrevtBtn>
        <StyledNextBtn onClick={() => setCurrentPage(5)}>계속</StyledNextBtn>
      </StyledBtn>
    </StyledHostPage>
  );
};

const StyledHostPage = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px;
`;

const StyledHostStart = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 770px;

  section {
    flex: 1;
    margin-right: 40px;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 440px;
    }
  }
`;

const StyledStep = styled.div`
  margin: 30px 0 40px;

  span {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.borderColorDark};
  }
`;

const StyledQuestion = styled.h2`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const StyledDirection = styled.div`
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledMainRoomImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  height: 400px;
  border: 2px dashed ${({ theme }) => theme.colors.pointColor};
  overflow: hidden;

  input[type='file'] {
    display: none;
  }

  label {
    padding: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.pointColor};
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.l};
    cursor: pointer;

    i {
      margin-right: 8px;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 400px;
    object-fit: cover;
  }
`;

const StyledSubRoomImgWrapper = styled.div`
  display: flex;
`;

const StyledSubRoomImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 240px;
  height: 150px;
  margin-top: 20px;
  margin-right: 20px;
  border: 2px dashed ${({ theme }) => theme.colors.pointColor};
  overflow: hidden;

  input[type='file'] {
    display: none;
  }

  label {
    padding: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.pointColor};
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.l};
    cursor: pointer;

    i {
      margin-right: 8px;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: 150px;
    object-fit: cover;
  }
`;

const StyledBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px;
`;

const StyledPrevtBtn = styled.button`
  color: #008489;
  font-size: inherit;
  cursor: pointer;
`;

const StyledNextBtn = styled.button`
  padding: 10px 15px;
  margin: 12px 0 28px;
  background-color: #008489;
  color: #fff;
  border-radius: 10px;
  font-size: inherit;
  cursor: pointer;
`;

export default Step4;
