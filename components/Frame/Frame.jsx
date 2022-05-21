import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: min-content;
  height: auto;

  padding: 15px;
  border-radius: 6px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #edeeee;
`;
const ContentWrapper = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  
  img {
    width: ${({ width } ) => width || '200px'};
    height: ${({ height }) => height || '200px'};
  }
`;

const Frame = props => {

  return (
    <Wrapper>
      <ContentWrapper 
        width={ props.width }
        height={ props.height }
      >
        <img src={props.src} />
        <div>
          { props.children }
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Frame;