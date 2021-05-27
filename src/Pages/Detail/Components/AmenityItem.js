import React from 'react';
import styled from 'styled-components';

const AmenityItem = ({ icon, description }) => {
  return (
    <StyledAmenityItem>
      <span>
        <i class={icon} />
      </span>
      <p>{description}</p>
    </StyledAmenityItem>
  );
};

const StyledAmenityItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export default AmenityItem;
