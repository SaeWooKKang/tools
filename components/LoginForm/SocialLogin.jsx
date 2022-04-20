import React from 'react';
import styled from 'styled-components';

const SocialLoginWrapper = styled.div`
  .sign-in-title {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #dee2e6;
    font-size: 12px;
    margin-bottom: 12px;
  }
  .sign-in-title::before,
  .sign-in-title::after {
    content: "";
    flex-grow: 1;
    background: #dee2e6;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
  .sign-in-btns {
    display: flex;
    justify-content: space-around;

    button {
      background: transparent;
      border: 1px solid #dee2e6;
      border-radius: 2px;

      &:hover{  
        cursor: pointer;
      }
    }
  }
`;

const SocialLogin = () => {

  return (
  <SocialLoginWrapper>
    <span className='sign-in-title'>간편 로그인</span>
    <div className='sign-in-btns'>
      <button>ㄱ</button>
      <button>ㄴ</button>
      <button>ㄷ</button>
      <button>ㄹ</button>
      <button>ㅁ</button>
    </div>
  </SocialLoginWrapper>
  );
};

export default SocialLogin;