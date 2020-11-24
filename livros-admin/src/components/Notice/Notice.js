import React, { useState, useEffect } from "react";
import NoticeItem from "./NoticeItem";
import * as G from "../../assets/style/GlobalStyle";
import * as S from "../../assets/style/Notice/Notice";
import { getNotice } from "../../api/notice";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getNotice(page)
      .then((res) => {
        console.log(res);
        setNotice(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const onDecreasePage = () => {
    if (page > 1) setPage((state) => state - 1);
  };

  const onIncreasePage = () => {
    setPage((state) => state + 1);
  };

  return (
    <G.AllContainer>
      <S.NoticeContainer>
        {notice.map((n) => (
          <NoticeItem
            key={n.uuid}
            id={n.uuid}
            title={n.title}
            content={n.content}
            date={n.createdAt}
            setNotice={onEditNotice}
          ></NoticeItem>
        ))}
      </S.NoticeContainer>

      <S.NoticeContainer page>
        <S.PageBox onClick={onDecreasePage}>{"<"}</S.PageBox>
        <S.PageBox num>{page}</S.PageBox>
        <S.PageBox onClick={onIncreasePage}>{">"}</S.PageBox>
      </S.NoticeContainer>
    </G.AllContainer>
  );
};

export default Notice;
