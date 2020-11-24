import styled from "styled-components";

export const AllContainer = styled.div`
    padding : 0 20rem;
`;

export const Button = styled.button`
    background-color : #0f4c81;
    border : none;
    color : white;
    border-radius : 20px;
    width : 5.5rem;
    height : 2.5rem;
    padding : 0 1rem;
    box-shadow : 1px 3px 5px #00000045;
    font-size : 1rem;
    outline : none;
    cursor : pointer;
    float : right;
    margin-top : ${(props) => (props.notice ? "3rem" : "")};
    opacity : 0.7;

    &:hover {
        opacity : 1;
        transition : 0.3s;
    }
`;