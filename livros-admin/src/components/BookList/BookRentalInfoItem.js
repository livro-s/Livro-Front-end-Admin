import React from 'react';
import * as S from "../../assets/style/BookList/BookItem";

const BookRentalInfoItem = () => {
    return (
        <S.BookRentalInfoContainer>
            <S.BookStateText>미연체</S.BookStateText>
            <S.BookRentalInfoBox>
                <S.BookInfoBox rental>
                    <S.BookInfo>빌린이 :</S.BookInfo>
                    <S.BookInfoContents>홍길동</S.BookInfoContents>
                </S.BookInfoBox>
                <S.BookInfoBox rental>
                    <S.BookInfo>학번 :</S.BookInfo>
                    <S.BookInfoContents>2111</S.BookInfoContents>
                </S.BookInfoBox>
            </S.BookRentalInfoBox>
        </S.BookRentalInfoContainer>
    );
};

export default BookRentalInfoItem;