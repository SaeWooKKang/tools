import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 0 8px;
`;

const Card = ({ img, width, height }) => {

  return (
    <CardWrapper>
      <img 
        src={ img }
        width={ width }
        height={ height }
      />
    </CardWrapper>
  );
};

export default Card;