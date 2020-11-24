import styled from "styled-components";

export const BookInfoContainer = styled.div`
    display : flex;
    align-items : center;
    padding : 0.7rem;
    width : 100%;
    border-bottom : ${(props) => (props.all ? "1px solid #9B9B9B71" : "none")};
    border-right : ${(props) => (props.all ? "1px solid #9B9B9B71" : "none")};
`;

export const BookImage = styled.img`
    box-shadow : 0 0 5px #00000012;
    margin-right : 2rem;
    height : 6.375rem;
    width : 4.75rem;
`;

export const BookTitle = styled.h1`
    font-size : 1.15rem;
    font-weight : 500;
`;

export const BookInfoBox = styled.div`
    display : flex;
    align-items : center;
    margin : 0.25rem 0 0 0;
    justify-content : ${(props) => (props.rental ? "center" : "")};
`;

export const BookInfo = styled.span`
    color : #00000050;
    font-size : 0.8rem;
`;

export const BookInfoContents = styled.p`
    font-size : 0.9rem;
    margin : 0 0 0 0.3rem;
`;

export const BookInfoWrapper = styled.div`
    
`;

export const BookRentalInfoContainer = styled.div`
    width : 20%;
    padding : 0.7rem 0.7rem 1.2rem 0.7rem;
    border-bottom : 1px solid #9B9B9B71;
    text-align : center;
    height : 100%;
`;

export const BookRentalInfoBox = styled.div`
    margin-bottom : 0.2rem;
`;

export const BookStateText = styled.h3`
    color : #19B45B;
    font-weight : 500;
`;

export const DeleteButton = styled.button`
    border : none;
    background-color : #0f4c81;
    color : white;
    outline : none;
    cursor : pointer;
    opacity : 0.8;

    &:hover {
        opacity : 1;
        transition : 0.3s;
    }
`;