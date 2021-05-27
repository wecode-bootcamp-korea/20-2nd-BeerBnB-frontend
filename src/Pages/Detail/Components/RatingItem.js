import React from 'react';
import styled from 'styled-components';

const RatingItem = ({ category, rating }) => {
  return (
    <StyledRatingItem>
      <div>
        <p>{category}</p>
      </div>
      <BarContainer>
        <Barbox>
          <Rating rating={rating} />
        </Barbox>
        <RatingNumberBox>
          <RatingNumber>{rating}</RatingNumber>
        </RatingNumberBox>
      </BarContainer>
    </StyledRatingItem>
  );
};

const StyledRatingItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-right: 50px;
  margin-bottom: 20px;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Barbox = styled.div`
  position: relative;
  height: 5px;
  width: 120px;
  margin-right: 15px;
  background-color: #ddd;
  border-radius: 30px;
  z-index: -1;
`;

const Rating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: ${props => `${(100 / 5) * props.rating}%`};
  background-color: #333;
  border-radius: 30px;
`;

const RatingNumberBox = styled.div``;

const RatingNumber = styled.p`
  display: inline;
  font-size: 12px;
  font-weight: 600;
`;

export default RatingItem;
