import styled from "styled-components";

export const NoticeItemBox = styled.div`
    border : 10px solid #F4F7FA;
    border-radius : 8px;
    width : 19.5rem;
    height : 28rem;
    padding : 0 1.5rem;
    position : relative;
`;

export const NoticeTitle = styled.h3`
`;

export const NoticeContents = styled.p`
`;

export const NoticeDate = styled.span`
    font-size : 0.8rem;
    color : #555555;
`;

export const NoticeInfoContainer = styled.footer`
    position : absolute;
    bottom: 0;
    width : inherit;
`;

export const NoticeInfoBox = styled.div`
    border-top : 1px solid #DDDDDD45;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const NoticeInfoContents = styled.div`
    display : flex;
`;

export const NoticeTextButton = styled.p`
    margin-left : 1rem;
    cursor : pointer;
    font-weight : 500;
    opacity : 0.7;
    color : ${(props) => (props.delete ? "#0f4c81" : "")};

    &:hover {
        opacity : 1;
        transition : 0.4s;
    }
`;