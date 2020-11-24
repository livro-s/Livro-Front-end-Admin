import React from 'react';
import BookInfoItem from './BookInfoItem';
import BookRentalInfoItem from './BookRentalInfoItem';
import * as S from "../../assets/style/BookList/BookList"

const BookListItem = () => {
    return (
        <S.BookListItemContainer>
            <BookInfoItem></BookInfoItem>
            <BookRentalInfoItem></BookRentalInfoItem>
        </S.BookListItemContainer>
    );
};

export default BookListItem;