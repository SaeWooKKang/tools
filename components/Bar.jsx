import React, { useState } from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  .child {
    background-color: blue;
  }
`;
const Bar = () => {
  return (
    <BarWrapper>
      <div className='child'>안녕하세요.</div>
    </BarWrapper>
  );
};

export default Bar;