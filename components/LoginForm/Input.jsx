import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: auto;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 13px 12px;
  position: relative;
  color: black;

  ::placeholder {
    color: #dee2e6;
  }
  &:focus {
    border: 1px solid ${ props => props.borderColor || 'black' };
    outline: none;
  }
`;

export default Input;