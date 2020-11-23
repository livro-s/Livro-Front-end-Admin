import styled from "styled-components";

export const LoginContainer = styled.div`
    display : flex;
    align-items : center;
    overflow : hidden;
`;

export const LoginSection = styled.section`
    width : 50vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const Div = styled.div`
    background-color : ${(props) => (props.right ? "#0f4c81" : "")};
`;

export const LogoSection = styled.article`

`;

export const LoginImg = styled.img`
    width : ${(props) => (props.right ? "100%" : "")};
    opacity : ${(props) => (props.right ? "0.5" : "")};
`;

export const TextBox = styled.div`
    margin : 1rem 0 4.5rem 0;
    text-align : center;
`;

export const LoginText = styled.p`
    color : #53535390;
    margin : 0.3rem 0 0 0;
`;

export const InputBox = styled.div`
    margin-top : 1rem;
`;

export const LoginInput = styled.input`
    width : 30rem;
    height : 3rem;
    padding : 0 1.5rem;
    border-radius : 30px;
    border : 1px solid #C1C1C1;
    font-size : 1.2rem;
    margin-top : 0.5rem;
`;

export const LoginButton = styled.button`
    width : 33rem;
    background-color : #0F4C81;
    border-radius : 30px;
    height : 3rem;
    color : white;
    font-size : 1.3rem;
    font-weight : 600;
    border : none;
    margin-top : 2rem;
    outline : none;
    cursor : pointer;
    opacity : 0.8;

    &:hover {
        opacity : 1;
        transition : 0.4s;
    }
`;