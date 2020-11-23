import React from 'react';
import * as S from "../../assets/style/Login/Login";
import { textLogo, loginAsset } from "../../assets/img";

const Login = () => {
    return (
        <S.LoginContainer>
            <S.LoginSection>
                <S.Div>
                <S.LogoSection>
                    <S.LoginImg src={textLogo} alt="livros-logo"></S.LoginImg>
                    <S.TextBox>
                        <S.LoginText>livros의 관리자 로그인 화면입니다.</S.LoginText>
                        <S.LoginText>로그인하여 도서관 시스템을 관리할 수 있습니다. </S.LoginText>
                    </S.TextBox>

                    <S.InputBox>
                        <S.LoginText>아이디</S.LoginText>
                        <S.LoginInput></S.LoginInput>
                    </S.InputBox>

                    <S.InputBox>
                        <S.LoginText>비밀번호</S.LoginText>
                        <S.LoginInput></S.LoginInput>
                    </S.InputBox>
                    
                </S.LogoSection>
                <S.LoginButton>로그인</S.LoginButton>
                </S.Div>
            </S.LoginSection>

            <S.LoginSection>
            <S.Div right>
                <S.LoginImg src={loginAsset} right></S.LoginImg>
            </S.Div>
            </S.LoginSection>
        </S.LoginContainer>
    );
};

export default Login;