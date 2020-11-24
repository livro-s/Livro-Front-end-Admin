import styled from "styled-components";

export const NoticeContainer = styled.div`
    display : flex;
    justify-content : ${(props) => (props.page ? "center" : "space-between")};
    margin-top : ${(props) => (props.page ? "3rem" : "")};
`;

export const PageBox = styled.div`
    border : 1px solid #70707050;
    padding : 0.26rem 0.5rem;
    background-color : ${(props) => (props.num ? "#0f4c81" : "")};
    color : ${(props) => (props.num ? "white" : "#535353")};
    font-weight : 600;
    cursor : pointer;
    margin : 0.2rem;
`;