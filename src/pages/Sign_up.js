import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logoGreen from "../assets/logo_green.svg";
import StudentId from "../components/input/StudentId";
import Name from "../components/input/Name";
import Email from "../components/input/Email";
import PasswordInput from "../components/input/PasswordInput";
import PasswordInputCheck from "../components/input/PasswordInputCheck";
import Button from "../components/Button";
import Password from "../components/input/PasswordInput";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 172px;
  height: 152px;
  margin-top: 38px;
`;

const Margin40 = styled.div`
  margin-top: 40px;
`;

const Margin42 = styled.div`
  margin-top: 42px;
`;


const SignUpText = styled.p`
  margin-top: 12px;
  font-size: 16px;
  color: #7A7A7A ;
`;

const SignUpLink = styled(Link)`
  color: #005950; 
  text-decoration: none; 
  cursor: pointer;
  margin-top: 12px;
  font-size: 16px;
`;


function Sign_up() {
    return (
        <CenteredDiv>
            <LogoImage src={logoGreen} alt="Logo" />
            <Margin42/>
            <Name/>
            <Margin40/>
            <StudentId />
            <Margin40/>
            <Email/>
            <PasswordInput />
            <Margin40/>
            <PasswordInputCheck/>
            <Margin42/>
            <Link to="/sign_in">
                <Button size="Large">회원가입완료</Button>
            </Link>
            <SignUpText>이미 회원이신가요?<SignUpLink to="/sign_in"> 로그인</SignUpLink></SignUpText>
        </CenteredDiv>
    );
}

export default Sign_up;
