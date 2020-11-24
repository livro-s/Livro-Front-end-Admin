import React from 'react';
import NoticeItem from "./NoticeItem";
import * as G from "../../assets/style/GlobalStyle";
import * as S from "../../assets/style/Notice/Notice";

const Notice = () => {
    return (
        <G.AllContainer>
            <S.NoticeContainer>
                <NoticeItem></NoticeItem>
                <NoticeItem></NoticeItem>
                <NoticeItem></NoticeItem>
            </S.NoticeContainer>

            <S.NoticeContainer page>
                <S.PageBox>{"<"}</S.PageBox>
                <S.PageBox num>1</S.PageBox>
                <S.PageBox>{">"}</S.PageBox>
            </S.NoticeContainer>
        </G.AllContainer>
    );
};

export default Notice;