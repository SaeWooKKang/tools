import React, { useState } from 'react';
import styled from 'styled-components';

import Bar from './Bar';

import LoginFrom from './LoginForm'

import GridCard from './GridCard';
import { dummyImg } from './GridCard/dummyImg';

const Div = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 100%;
`;
const Foo = () => {

  const [loginFormToggle, setLoginFormToggle] = useState(false);
  const handleLogInBtnClick = () => {
    setLoginFormToggle(pre => !pre);
  };
  
  return (
    <Div style={{ height: '100%', display:'flex', flexDirection:'column', alignItems:'center'}}>

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

      {/* Grid Card */}
      <div style={{marginTop:'20px'}}> ⬇️⬇️ 그리드 컴포넌트 ⬇️⬇️</div>
      <div style={{width: 'auto', height:'atuo'}}>
        <GridCard
          datum={dummyImg}
          width={200}
          height={200}
        />
      </div>

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