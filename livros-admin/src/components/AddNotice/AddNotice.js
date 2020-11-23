import React from 'react';
import * as S from "../../assets/style/Notice/AddNotice";
import * as G from "../../assets/style/GlobalStyle";

const AddNotice = () => {
    return (
        <G.AllContainer>
            <S.InputBox>
                <S.LoginText>제목</S.LoginText>
                <S.LoginInput></S.LoginInput>
            </S.InputBox>

            <S.InputBox>
                <S.LoginText>내용</S.LoginText>
                <S.LoginInput contents></S.LoginInput>
            </S.InputBox>
            <G.Button notice>업로드</G.Button>
        </G.AllContainer>
    );
};

export default AddNotice;