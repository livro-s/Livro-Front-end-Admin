import React, { useState, useEffect } from "react";
import * as G from "../../assets/style/GlobalStyle";
import * as N from "../../assets/style/Notice/Notice";
import * as S from "../../assets/style/BookList/BookList";
import BookListItem from "./BookListItem";
import { getRentalInfo, getDelayInfo } from "../../api/book";
import Loading from "../Common/Loading/Loading";

const BookList = () => {
  const [page, setPage] = useState(1);
  const [book, setBook] = useState([]);
  const [errText, setErrText] = useState(null);
  const [delay, setDelay] = useState(true);
  const [bookState, setBookState] = useState("미연체");
  const [isLoading, setIsLoading] = useState(false);

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  useEffect(() => {
    setIsLoading(true);
    getNotDelay();
  }, []);

  const getNotDelay = () => {
    setIsLoading(true);
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "." + mm + "." + dd;

    getRentalInfo(page, today)
      .then((res) => {
        setErrText(null);
        setIsLoading(false);
        setBook(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setBook([]);
          setIsLoading(false);
          setErrText("더 이상 목록이 없습니다.");
        }
      });
  };

  const getDelay = () => {
    setIsLoading(true);
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "." + mm + "." + dd;
    getDelayInfo(page, today)
      .then((res) => {
        setErrText(null);
        setIsLoading(false);
        setBook(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setBook([]);
          setIsLoading(false);
          setErrText("더 이상 목록이 없습니다.");
        }
      });
  };

  useEffect(() => {
    if (delay === true) getNotDelay();
    else getDelay();
  }, [page]);

  useEffect(() => {
    if (delay === true) getNotDelay();
    else getDelay();
  }, [delay]);

  const onDelayList = () => {
    if (delay === true) {
      setPage(1);
    }
    setDelay(false);
    setBookState("연체");
  };

  const onNotDelayList = () => {
    if (delay === false) {
      setPage(1);
    }
    setDelay(true);
    setBookState("미연체");
  };

  const onDecreasePage = () => {
    if (page > 1) setPage((state) => state - 1);
  };

  const onIncreasePage = () => {
    if (errText === null) setPage((state) => state + 1);
    else alert("더 이상 목록이 없습니다.");
  };

  return (
    <G.AllContainer>
      {isLoading ? <Loading /> : ""}
      <S.BookState onClick={onNotDelayList} style={{ color: "#0F4C81" }}>
        미연체 도서
      </S.BookState>
      <S.BookState onClick={onDelayList}>연체 도서</S.BookState>
      <S.BookLine></S.BookLine>
      <div style={{ textAlign: "center" }}>{errText}</div>

      {book.map((b) => (
        <BookListItem
          key={b.uuid}
          id={b.uuid}
          name={b.user.name}
          studentNo={b.user.studentNo}
          title={b.book.title}
          author={b.book.author}
          publisher={b.book.publisher}
          category={b.book.category}
          bookImg={b.book.image}
          bookState={bookState}
        ></BookListItem>
      ))}

      <N.NoticeContainer page>
        <N.PageBox onClick={onDecreasePage}>{"<"}</N.PageBox>
        <N.PageBox num>{page}</N.PageBox>
        <N.PageBox onClick={onIncreasePage}>{">"}</N.PageBox>
      </N.NoticeContainer>
    </G.AllContainer>
  );
};

export default BookList;
