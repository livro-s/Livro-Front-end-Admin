import React, { useEffect, useState } from "react";
import * as S from "../../assets/style/BookList/BookItem";
import * as B from "../../assets/style/BookList/BookList";
import { deleteBook } from "../../api/book";

const BookListItem = ({ id, bookState, bookImg, name, studentNo, title, author, publisher, category }) => {
  const [stateColor, setStateColor] = useState("#19B45B");
  useEffect(() => {
    bookState === "연체" ? setStateColor("#FF0000") : setStateColor("#19B45B");
  }, [bookState]);

  const onDeleteBook = () => {
    deleteBook(id)
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 300)
      
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <B.BookListItemContainer>
      <S.BookInfoContainer all>
      <S.BookInfoContainer>
        <S.BookImage src={bookImg}></S.BookImage>
        <S.BookInfoWrapper>
          <S.BookTitle>
            {title}
          </S.BookTitle>
          <S.BookInfoBox>
            <S.BookInfo>저자 :</S.BookInfo>
            <S.BookInfoContents>{author}</S.BookInfoContents>
          </S.BookInfoBox>
          <S.BookInfoBox>
            <S.BookInfo>출판사 :</S.BookInfo>
            <S.BookInfoContents>{publisher}</S.BookInfoContents>
          </S.BookInfoBox>
          <S.BookInfoBox>
            <S.BookInfo>분야 :</S.BookInfo>
            <S.BookInfoContents>{category}</S.BookInfoContents>
          </S.BookInfoBox>
        </S.BookInfoWrapper>
      </S.BookInfoContainer>
    </S.BookInfoContainer>
    <S.BookRentalInfoContainer>
      <S.BookStateText style={{color : stateColor}}>{bookState}</S.BookStateText>
      <S.BookRentalInfoBox>
        <S.BookInfoBox rental>
          <S.BookInfo>빌린이 :</S.BookInfo>
          <S.BookInfoContents>{name}</S.BookInfoContents>
        </S.BookInfoBox>
        <S.BookInfoBox rental>
          <S.BookInfo>학번 :</S.BookInfo>
          <S.BookInfoContents>{studentNo}</S.BookInfoContents>
        </S.BookInfoBox>
      </S.BookRentalInfoBox>
      <S.DeleteButton onClick={onDeleteBook}>반납완료</S.DeleteButton>
    </S.BookRentalInfoContainer>
    </B.BookListItemContainer>
  );
};

export default BookListItem;
