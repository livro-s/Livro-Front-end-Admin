import styled from "styled-components";

export const NoticeTitle = styled.h1``;

export const NoticeText = styled.p`
    color : ${(props) => (props.contents ? "" : "#555555")};
    font-size : ${(props) => (props.contents ? "1.1rem" : "0.8rem")};
`;