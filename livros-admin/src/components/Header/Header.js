import React from "react";
import { logo } from "../../assets/img";
import * as S from "../../assets/style/Header/Header";
import * as G from "../../assets/style/GlobalStyle";
import { useHistory, Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.push({
      pathname: "/",
    });
  }

  return (
    <S.HeaderContainer>
      <S.HeaderDiv></S.HeaderDiv>
      <S.HeaderBox>
        <img src={logo} alt="logo"></img>
      </S.HeaderBox>

      <S.HeaderBox menu>
        <Link to="/book-list" style={{textDecoration : "none"}}><S.HeaderMenuText>도서 확인</S.HeaderMenuText></Link>
        <Link to="notice" style={{textDecoration : "none"}}><S.HeaderMenuText>공지사항</S.HeaderMenuText></Link>
        <G.Button onClick={onLogout}>로그아웃</G.Button>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};

export default Header;
