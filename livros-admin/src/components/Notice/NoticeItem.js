import React from "react";
import * as S from "../../assets/style/Notice/NoticeItem";
import { deleteNotice } from "../../api/notice";
import { Link } from "react-router-dom";

const NoticeItem = ({ id, title, content, date }) => {
  const onDeleteNotice = () => {
    deleteNotice(id)
      .then(() => {
        alert("공지 삭제가 완료되었습니다.");
        setTimeout(() => {
          window.location.reload();
        }, 300)
    })
      .catch(() => alert("공지 삭제에 실패하였습니다. 다시 시도하세요."));
  };

  return (
    <S.NoticeItemBox>
      <Link
        style={{ textDecoration: "none", color: "#000000" }}
        to={{
          pathname: `/notice/${id}`,
        }}
      >
        <S.NoticeTitle>{title}</S.NoticeTitle>
        <S.NoticeContents>{content}</S.NoticeContents>
      </Link>

      <S.NoticeInfoContainer>
        <S.NoticeInfoBox>
          <S.NoticeInfoContents>
            <S.NoticeDate>{date}</S.NoticeDate>
          </S.NoticeInfoContents>

          <S.NoticeInfoContents>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/edit-notice/${id}`,
                state: {
                  editTitle: title,
                  editContent: content,
                },
              }}
            >
              <S.NoticeTextButton>수정</S.NoticeTextButton>
            </Link>
            <S.NoticeTextButton delete onClick={onDeleteNotice}>
              삭제
            </S.NoticeTextButton>
          </S.NoticeInfoContents>
        </S.NoticeInfoBox>
      </S.NoticeInfoContainer>
    </S.NoticeItemBox>
  );
};

export default NoticeItem;
