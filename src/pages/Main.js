import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/splash-screen/logo-white.svg';
import XIcon from '../assets/splash-screen/splash-x.svg';
import WinkWhite from '../assets/splash-screen/wink-white.svg';
import { useCookies } from 'react-cookie';
import userAPI from '../api/userAPI';

const moveCenter = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

const Logo = styled.div`
  position: absolute;
  ${(props) => (props.top ? `top: 20%;` : `bottom: 10%;`)}
  left: 50%;
  transform: translateX(${(props) => props.start});
  animation: ${moveCenter} 3s forwards;
`;

const SplashScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #005950; // 최초 시작 시 색상 변수가 적용되지 않는 경우가 있음.
  box-sizing: border-box;
  overflow-x: hidden;
`;

const CenterIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SplashScreen = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cookies.auth_token) {
        navigate('/main');
      } else {
        navigate('/sign-in'); // 3초 후에 로그인 페이지로 이동 or 메인 페이지로 이동
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashScreenContainer>
      <Logo start="-200%" top>
        <img src={WinkWhite} />
      </Logo>
      <CenterIcon src={XIcon} />
      <Logo start="100%">
        <img src={LogoWhite} />
      </Logo>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
