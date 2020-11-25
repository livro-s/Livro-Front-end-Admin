import React, { useState } from "react";
import * as S from "../../assets/style/Notice/AddNotice";
import * as G from "../../assets/style/GlobalStyle";
import { addNotice, putNotice } from "../../api/notice";
import { useLocation, useHistory } from "react-router-dom";
import Loading from "../Common/Loading/Loading";

const AddNotice = () => {
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split("/");
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { title, content } = inputs;

  const onChangeNotice = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onEditNotice = () => {
    setIsLoading(true);
    putNotice(id[2], title, content)
      .then(() => {
        setIsLoading(false);
        alert("공지 수정이 완료되었습니다.");
        history.push({
          pathname: "/notice",
        });
      })
      .catch(() => alert("공지 수정에 실패했습니다. 다시 시도하세요."));
  };

  const onAddNotice = () => {
    setIsLoading(true);
    addNotice(title, content)
      .then(() => {
        setIsLoading(false);
        alert("공지 작성이 완료되었습니다.");
        history.push({
          pathname: "/notice",
        });
    })
      .catch(() => alert("공지 작성에 실패했습니다. 다시 시도하세요."));
  };

  return (
    <G.AllContainer>
      {isLoading ? <Loading /> : ""}
      <S.InputBox>
        <S.LoginText>제목</S.LoginText>
        <S.LoginInput
          type="text"
          name="title"
          value={title}
          onChange={onChangeNotice}
        ></S.LoginInput>
      </S.InputBox>

      <S.InputBox>
        <S.LoginText>내용</S.LoginText>
        <S.LoginInput
          contents
          name="content"
          value={content}
          onChange={onChangeNotice}
        ></S.LoginInput>
      </S.InputBox>
      <S.EditButton onClick={onEditNotice}>수정</S.EditButton>
      <G.Button notice onClick={onAddNotice}>
        업로드
      </G.Button>
    </G.AllContainer>
  );
};

export default AddNotice;
