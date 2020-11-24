import React from 'react';
import { logo } from "../../assets/img";
import * as S from "../../assets/style/Header/Header";
import * as G from "../../assets/style/GlobalStyle";

const Header = () => {
    return (
        <S.HeaderContainer>
            <S.HeaderDiv></S.HeaderDiv>
            <S.HeaderBox>
                <img src={logo} alt="logo"></img>
            </S.HeaderBox>
            
            <S.HeaderBox menu>
                <S.HeaderMenuText>도서 확인</S.HeaderMenuText>
                <S.HeaderMenuText>공지사항</S.HeaderMenuText>
                <G.Button>로그아웃</G.Button>
            </S.HeaderBox>
        </S.HeaderContainer>
    );
};

export default Header;