import React, { useEffect, useState } from "react";
import * as G from "../../assets/style/GlobalStyle";
import * as S from "../../assets/style/Notice/DetailNotice";
import { detailGetNotice } from "../../api/notice";
import { useLocation, Link, useHistory } from "react-router-dom";
import Loading from "../Common/Loading/Loading";

const DetailNotice = () => {
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split("/");
  const [notice, setNotice] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    detailGetNotice(id[2])
      .then((res) => {
        setIsLoading(false);
        setNotice(res.data);
      })
      .catch(() => {
        alert("공지를 불러오는데에 실패했습니다. 다시 시도하세요.");
        history.push({
          pathname: "/notice",
        });
      });
  }, []);

  return (
    <G.AllContainer>
      {isLoading ? <Loading /> : ""}
      <S.NoticeTitle>{notice.title}</S.NoticeTitle>
      <S.NoticeText>{notice.createdAt}</S.NoticeText>
      <S.NoticeText contents>{notice.content}</S.NoticeText>
      <Link to="/notice">
        <G.NoticeButton>메인으로</G.NoticeButton>
      </Link>
    </G.AllContainer>
  );
};

export default DetailNotice;
