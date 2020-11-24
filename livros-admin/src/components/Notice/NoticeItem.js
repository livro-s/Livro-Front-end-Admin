import React from 'react';
import * as S from "../../assets/style/Notice/NoticeItem";

const NoticeItem = () => {
    return (
        <S.NoticeItemBox>
            <S.NoticeTitle>도서관 이용 공지사항 안내</S.NoticeTitle>
            <S.NoticeContents>이성은 있는 있을 행복스럽고 실현에 것이다. 소리다.이것은 인도하겠다는 
                능히 날카로우나 인생에 천고에 든 그들은 아니다. 꽃이 창공에 대고, 
                풀이 것이다. 안고, 속에서 뜨고 어쩌구 이성은 있는 있을 행복스럽고 
                실현에 것이다. 소리다.이것은 인도하겠다는 능히 날카로우나 인생에 천고에 
                든 그들은 아니다. 꽃이 창공에 대고, 풀이 것이다. 안고, 속에서 뜨고 어쩌구</S.NoticeContents>


            <S.NoticeInfoContainer>
                <S.NoticeInfoBox>
                    <S.NoticeInfoContents>
                            <S.NoticeDate>2020년 8월 20일</S.NoticeDate>
                        </S.NoticeInfoContents>
                        
                        <S.NoticeInfoContents>
                            <S.NoticeTextButton>수정</S.NoticeTextButton>
                            <S.NoticeTextButton delete>삭제</S.NoticeTextButton>
                        </S.NoticeInfoContents>
                </S.NoticeInfoBox>
                    
                
                
            </S.NoticeInfoContainer>
        </S.NoticeItemBox>
    );
};

export default NoticeItem;