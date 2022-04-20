import React from 'react';
import styled from 'styled-components';

const FindAndJoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #616568;
  font-size: 12px;
  margin: 0 0 24px;
  
  .span-find-pw,
  .span-sign-in {
    &:hover{  
      cursor: pointer;
    }
  }

  .span-sign-in::before {
    content: " | ";
  }
`;

const FindAndJoin = () => {

  return (
  <FindAndJoinWrapper>
    <p>
      <span className='span-find-pw'>비밀번호 찾기</span> 
      <span className='span-sign-in'>회원가입</span>
    </p>
  </FindAndJoinWrapper>
  );
};

export default FindAndJoin;