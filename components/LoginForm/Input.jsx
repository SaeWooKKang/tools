import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid ${props => props.borderColor || 'black'};
  margin-bottom: 12px;
  padding: 13px 12px;
  border-radius: 4px;
`;

export default Input;