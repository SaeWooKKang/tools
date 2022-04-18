import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import LoginBtn from './LoginBtn';
import useInput from '../../hooks/useInput';


const SignIn = () => {
  const [id, handleIdChange] = useInput('');
  const [pw, handlePwChange] = useInput('');

  const handleLoginBtnClicked = () => {
    console.log('login clicked!');
    // 비동기 요청 로직...
  };

  return(
    <>
      <div style={{display:'flex', flexDirection: 'column'}}>      
        <Input 
          type={'id'}
          name={'login-id'}
          placeholder={'이메일'}
          text={id}
          onChange={handleIdChange}
          borderColor={'orange'}
        />
        <Input 
          type={'password'}
          name={'login-password'}
          placeholder={'비밀번호'}
          text={pw}
          onChange={handlePwChange}
          borderColor={'orange'}
        />
      </div>
      <div className='login__btn'>
        <LoginBtn onClick={handleLoginBtnClicked}>로그인</LoginBtn>
      </div>
    </>
  );
};

export default SignIn;