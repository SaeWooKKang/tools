import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 24px 0;
`;

const GridCard = props => {
  const { datum, width, height } = props;

  return (
    <CardsWrapper>
      {datum.map(data => (
        <React.Fragment key={ data.name }>
          <Card 
            img={ data.img }
            name={ data.name }
            width={ width }
            height={ height }
          />
        </React.Fragment>
      ))}
    </CardsWrapper>
  );
};

export default GridCard;