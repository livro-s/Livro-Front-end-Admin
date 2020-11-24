import React from 'react';
import * as S from "../../assets/style/BookList/BookItem";
import { logo } from "../../assets/img";

const BookInfoItem = () => {
    return (
        <S.BookInfoContainer all>
            <S.BookInfoContainer>
                <S.BookImage src={logo}></S.BookImage>
                <S.BookInfoWrapper>
                    <S.BookTitle>(빠르게 배워서 바르게 적용하는)Vue.js 퀵 스타트</S.BookTitle>
                    <S.BookInfoBox>
                        <S.BookInfo>저자 :</S.BookInfo>
                        <S.BookInfoContents>홍길동</S.BookInfoContents>
                    </S.BookInfoBox>
                    <S.BookInfoBox>
                        <S.BookInfo>출판사 :</S.BookInfo>
                        <S.BookInfoContents>이지스퍼블리싱</S.BookInfoContents>
                    </S.BookInfoBox>
                    <S.BookInfoBox>
                        <S.BookInfo>분야 :</S.BookInfo>
                        <S.BookInfoContents>전공도서</S.BookInfoContents>
                    </S.BookInfoBox>
                </S.BookInfoWrapper>
            </S.BookInfoContainer>
        </S.BookInfoContainer>
    );
};

export default BookInfoItem;