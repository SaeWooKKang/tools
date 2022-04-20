import React from 'react';
import styled from 'styled-components';

import CloseBtn from './CloseBtn';
import Logo from './Logo';
import SignIn from './SignIn';
import SocialLogin from './SocialLogin';
import FindAndJoin from './FindAndJoin';

const Modal = styled.div`
  position: fixed; 
  top: 0; left: 0;
  width: 100%; 
  height: 100%;
  display: block;
  background-color: rgba(0, 0, 0, 0.4); 

  .modal__body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const LoginWrapper = styled.div`
  height: 100%;
  width: 312px; 
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  .close__btn {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .login__btn {
    margin: 12px 0 12px 0;
  }
  .logo {
    display: flex; 
    justify-content: center;
  }
`;

const LoginForm = ({ onCloseBtn }) => {

  return (
    <Modal>
      <div className='modal__body'>
        <LoginWrapper>
          <div className='close__btn'>
            <CloseBtn bgColor='orange' onClick={ onCloseBtn }>x</CloseBtn>
          </div>
          <div className='logo'>
            <Logo />
          </div>
          <>
            <SignIn />
          </>
          <>
            <FindAndJoin />
            <SocialLogin />
          </>
        </LoginWrapper>
      </div>
    </Modal>
  );
};

export default LoginForm;