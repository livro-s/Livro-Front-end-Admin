import React, { useState, useEffect } from "react";
import NoticeItem from "./NoticeItem";
import * as G from "../../assets/style/GlobalStyle";
import * as S from "../../assets/style/Notice/Notice";
import { getNotice } from "../../api/notice";
import { Link } from "react-router-dom";
import Loading from "../Common/Loading/Loading";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNotice(page)
      .then((res) => {
        setIsLoading(false);
        setNotice(res.data);
      })
      .catch(() => alert("공지 불러오기에 실패했습니다. 다시 시도하세요."));
  }, [page]);

  const onDecreasePage = () => {
    if (page > 1) setPage((state) => state - 1);
  };

  const onIncreasePage = () => {
    setPage((state) => state + 1);
  };

  return (
    <G.AllContainer>
      {isLoading ? <Loading /> : ""}
      <S.NoticeContainer>
        {notice.map((n) => (
          <NoticeItem
            key={n.uuid}
            id={n.uuid}
            title={n.title}
            content={n.content}
            date={n.createdAt}
          ></NoticeItem>
        ))}
      </S.NoticeContainer>

      <S.NoticeContainer page>
        <S.PageBox onClick={onDecreasePage}>{"<"}</S.PageBox>
        <S.PageBox num>{page}</S.PageBox>
        <S.PageBox onClick={onIncreasePage}>{">"}</S.PageBox>
      </S.NoticeContainer>
      <Link to="/add-notice"><G.Button>글쓰기</G.Button></Link>
    </G.AllContainer>
  );
};

export default Notice;
