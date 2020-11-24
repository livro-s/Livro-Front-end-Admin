import React from 'react';
import * as G from "../../assets/style/GlobalStyle";
import * as N from "../../assets/style/Notice/Notice";
import * as S from "../../assets/style/BookList/BookList";
import BookListItem from './BookListItem';

const BookList = () => {
    return (
        <G.AllContainer>
            <S.BookState>미연체 도서</S.BookState>
            <S.BookState>연체 도서</S.BookState>
            <S.BookLine></S.BookLine>
            <BookListItem></BookListItem>
            <BookListItem></BookListItem>
            <BookListItem></BookListItem>
            <N.NoticeContainer page>
                <N.PageBox>{"<"}</N.PageBox>
                <N.PageBox num>1</N.PageBox>
                <N.PageBox>{">"}</N.PageBox>
            </N.NoticeContainer>
        </G.AllContainer>
    );
};

export default BookList;