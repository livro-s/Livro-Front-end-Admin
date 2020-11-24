import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin : 1.2rem 10rem 6rem 10rem;
    display : flex;
    justify-content : space-between;
`;

export const HeaderBox = styled.div`
    display : flex;
    align-items : center;
    justify-content : ${(props) => (props.menu ? "space-between" : "center")};
    width : ${(props) => (props.menu ? "20rem" : "")};
`;

export const HeaderDiv = styled.div`
    width : 20rem;
`;

export const HeaderMenuText = styled.div`
    color: #707070;
    cursor : pointer;
`;