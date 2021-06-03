import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Step4 = ({ setCurrentPage, setSelectedImgFiles, selectedImgFiles }) => {
  const [roomImgSrc, setRoomImgSrc] = useState({
    mainImg: null,
    secondImg: null,
    thirdImg: null,
  });

  const previewImg = e => {
    const { name } = e.target;
    setRoomImgSrc({
      ...roomImgSrc,
      [name]: URL.createObjectURL(e.target.files[0]),
    });
    setSelectedImgFiles([...selectedImgFiles, e.target.files[0]]);
  };
  return (
    <StyledHostPage>
      <StyledHostStart>
        <section>
          <StyledStep>
            <StyledCurrentPage>4단계</StyledCurrentPage>
            <StyledQuestion>
              멋진 사진으로 숙소가 돋보이게 해주세요.
            </StyledQuestion>
            <StyledDirection>
              휴대전화나 카메라를 사용하여 사진을 찍으세요. 숙소를 등록하려면
              1장 이상의 사진을 업로드하세요. <br />
              원하는 대로 드래그하여 사진 배치 순서를 결정할 수 있습니다. 언제든
              사진을 추가하거나 수정하실 수 있습니다.
            </StyledDirection>
            <StyledImgWrapper>
              <StyledMainRoomImg>
                <input
                  type="file"
                  onChange={previewImg}
                  name="mainImg"
                  id="mainImage"
                  accept="image/*"
                />
                <label htmlFor="mainImage">
                  <i class="fas fa-cloud-upload-alt" />
                  사진 업로드
                </label>
                {roomImgSrc.mainImg && (
                  <img src={roomImgSrc.mainImg} alt="방이미지" />
                )}
              </StyledMainRoomImg>

              {roomImgSrc.mainImg && (
                <StyledSubRoomImgWrapper>
                  <StyledSubRoomImg>
                    <input
                      type="file"
                      onChange={previewImg}
                      name="secondImg"
                      id="subImg1"
                      accept="image/*"
                    />
                    <label htmlFor="subImg1">
                      <i class="fas fa-cloud-upload-alt" />
                      사진 업로드
                    </label>
                    {roomImgSrc.secondImg && (
                      <img src={roomImgSrc.secondImg} alt="방이미지" />
                    )}
                  </StyledSubRoomImg>
                  <StyledSubRoomImg>
                    <input
                      type="file"
                      onChange={previewImg}
                      name="thridImg"
                      id="subImg2"
                      accept="image/*"
                    />
                    <label htmlFor="subImg2">
                      <i class="fas fa-cloud-upload-alt" />
                      사진 업로드
                    </label>
                    {roomImgSrc.thridImg && (
                      <img src={roomImgSrc.thridImg} alt="방이미지" />
                    )}
                  </StyledSubRoomImg>
                </StyledSubRoomImgWrapper>
              )}
            </StyledImgWrapper>
          </StyledStep>
        </section>
        <aside>
          <img src="/images/PngItem_1769236.png" alt="에어비엔비" />
        </aside>
      </StyledHostStart>
      <StyledBtn>
        <StyledPrevtBtn onClick={() => setCurrentPage(3)}>뒤로</StyledPrevtBtn>
        <StyledNextBtn
          onClick={() => {
            setCurrentPage(5);
            // uploadImages();
          }}
        >
          계속
        </StyledNextBtn>
      </StyledBtn>
    </StyledHostPage>
  );
};

const StyledHostPage = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 10px 30px;
`;

const StyledHostStart = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 730px;

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
  margin: 10px 0 40px;
`;

const StyledCurrentPage = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: grey;
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

const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMainRoomImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  height: 400px;
  border: 2px dashed #3fcaa1;
  overflow: hidden;

  input[type='file'] {
    display: none;
  }

  label {
    padding: 15px;
    border-radius: 5px;
    background-color: #3fcaa1;
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
  border: 2px dashed #3fcaa1;
  overflow: hidden;

  &:first-child {
    margin-right: 20px;
  }

  input[type='file'] {
    display: none;
  }

  label {
    padding: 15px;
    border-radius: 5px;
    background-color: #3fcaa1;
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
  color: #3fcaa1;
  font-size: inherit;
  cursor: pointer;
`;

const StyledNextBtn = styled.button`
  padding: 10px 15px;
  margin: 12px 0 28px;
  background-color: #3fcaa1;
  color: #fff;
  border-radius: 10px;
  font-size: inherit;
  cursor: pointer;
`;

export default Step4;
