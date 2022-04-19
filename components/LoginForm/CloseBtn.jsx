import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  padding: 4px;
  width: 24px;
  height: 24px;
  text-align: center;

  &:hover{  
    background-color : ${ props => props.bgColor || 'black' };
    cursor: pointer;
    border-radius: 2px;
  }
`;

export default CloseButton;