import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bell from '../../src/assets/Settings/bell.svg';
import edit from '../../src/assets/Settings/edit.svg';
import people from '../../src/assets/Settings/people.svg';
import radio from '../../src/assets/Settings/radio.svg';
import arrow from '../../src/assets/Settings/arrow.svg';
import questionmark from '../../src/assets/Settings/questionmark.svg';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 360px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
  padding-left: 33px;
  padding-right: 33px;
  padding-top: 102px;
  box-sizing: border-box;
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  gap: 20px;
`;

const BoxComponent = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #005950;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #505050;
  flex: 1;
`;

const LogOutContainer = styled.div`
  width: 70%;

  //display: flex;
  justify-content: center;
  align-items: center;
`;

const LogOutText = styled.p`
  font-size: 16px;
  color: #505050;
  text-align: center;
`;

const LogOutBox = styled.button`
  width: 100%;
  border: 1px solid #005950;
  border-radius: 5px;
  //display: flex;
  align-items: center;
  justify-content: center;
`;

function Main() {
  const [imagePath, setImagePath] = useState('');
  return (
    <MainContainer>
      <BoxContainer>
        <BoxComponent>
          <MiniContainer>
            <img src={bell} />
            <Text>알림</Text>
          </MiniContainer>
          <img src={radio} />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <img src={questionmark} />
            <Text>정보</Text>
          </MiniContainer>
          <img src={arrow} />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <img src={people} />
            <Text>사용자 모드</Text>
          </MiniContainer>
          <img src={arrow} />
        </BoxComponent>
      </BoxContainer>
      <LogOutContainer>
        <LogOutBox>
          <LogOutText>로그아웃</LogOutText>
        </LogOutBox>
      </LogOutContainer>
    </MainContainer>
  );
}

export default Main;
