import React, { useState } from 'react';
import styled from 'styled-components';
import LoginFrom from './LoginForm'
import LoginBtn from './LoginForm/LoginBtn';
import Bar from './Bar';

const Div = styled.div`
  background-color: skyblue;
`;
const Foo = () => {
  const [loginFormToggle, setLoginFormToggle] = useState(false);
  const handleLogInBtnClick = () => {
    setLoginFormToggle(pre => !pre);
  };
  
  return (
    <Div style={{ height: '100vh', display:'flex', flexDirection:'column' }}>

      {/* 로그인 폼  */}
      <>
        <span>
          <button onClick={handleLogInBtnClick}>로그인 폼 보기</button>
        </span>
        { 
          loginFormToggle 
            ? <LoginFrom onCloseBtn={handleLogInBtnClick}/> 
            : null 
        }
      </>
     
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque reiciendis minima ut perferendis debitis tenetur nostrum eaque reprehenderit laborum consequatur dolor magnam molestiae quo repellendus, natus sed? Iusto, iure?
      </div>
    </Div>
  
  );
};

export default Foo;