import styled from "styled-components";

export const LoginText = styled.p`
    color : #535353;
    margin : 0.3rem 0 0 0;
    font-size : 1.25rem;
`;

export const InputBox = styled.div`
    margin-top : 1rem;
`;

export const LoginInput = styled.textarea`
    width : 100%;
    border-radius : 15px;
    height : ${(props) => (props.contents ? "20rem" : "2.5rem")};
    border : 1px solid #C1C1C1;
    font-size : ${(props) => (props.contents ? "1.2rem" : "1.8rem")};
    margin-top : 0.5rem;
    resize: none;
`;

export const EditButton = styled.button`
    border : 2px solid #0f4c81;
    color : #0f4c81;
    border-radius : 15px;
    background-color : white;
    padding : 0.2rem 0.8rem;
    font-weight : 500;
    outline : none;
    cursor : pointer;
    margin-top : 1rem;

    &:hover {
        background-color : #0f4c81;
        color : white;
        transition : 0.4s;
    }
`;