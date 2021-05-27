import React from 'react';
import styled from 'styled-components';

const ImgContainer = ({ imgSrc }) => {
  return (
    <StyledImgContainer>
      <BigImg>
        <img alt="thumbnail" src={imgSrc} />
      </BigImg>
      <SmallImgContainer>
        <SmallImg>
          <img
            alt="thumbnail"
            src="/images/marcia-bartho-Uasj0wDn6AQ-unsplash.jpg"
          />
        </SmallImg>
        <SmallImg>
          <img
            alt="thumbnail"
            src="/images/spacejoy-LhOJl195TWc-unsplash.jpg"
          />
        </SmallImg>
        <SmallImg>
          <img
            alt="thumbnail"
            src="/images/florian-douillet-9Nig3VNWP-Q-unsplash.jpg"
          />
        </SmallImg>
        <SmallImg>
          <img
            alt="thumbnail"
            src="/images/cater-yang-1a_u4n02YNo-unsplash.jpg"
          />
        </SmallImg>
      </SmallImgContainer>
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const BigImg = styled.div`
  width: 49.5%;

  img {
    width: 100%;
    height: 557px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const SmallImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 49.5%;
`;

const SmallImg = styled.div`
  width: 49%;

  img {
    width: 100%;
  }

  &:nth-child(2) {
    img {
      border-top-right-radius: 15px;
    }
  }

  &:nth-child(3) {
    padding-top: 5px;
  }

  &:nth-child(4) {
    padding-top: 5px;
    img {
      border-bottom-right-radius: 15px;
    }
  }
`;

export default ImgContainer;
