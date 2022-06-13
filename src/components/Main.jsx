import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Main = () => {

    const navigate = useNavigate();

    return (
        <>
            <KingWrap>
                <Title>
                    <H1><J>J</J>avascript</H1>                
                    <H1><J>S</J>tudy</H1>
                </Title>
                <CardsWrap>
                    <Cards onClick={()=>{
                        navigate('/category/3');
                    }}>상급</Cards>
                    <Cards onClick={()=>{
                        navigate('/category/2');
                    }}>중급</Cards>
                    <Cards onClick={()=>{
                        navigate('/category/1');
                    }}>초급</Cards>
                </CardsWrap>
            </KingWrap>
        </>
        
    )
}


const KingWrap = Styled.div`
    display: column;        
    margin: 90px auto;
`;
const Title = Styled.div`
    margin: auto;
    margin-top: 2px;
`;

const H1 = Styled.h1`
    margin-left: 50px;
    font-family: 'DungGeunMo';
    font-size: 60px;
`;

const J = Styled.span`
    color: #FDD835;
`;

const CardsWrap = Styled.div`
    margin: auto;
    width: 100vw;
    height: 70vh;
    background-color: #FFFDE7;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const Cards = Styled.div`
    background-color: #FDD600;
    width: 500px;
    height: 300px;
    margin: 10px auto;
    border-radius: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'DungGeunMo';
    box-shadow: 2px 2px 2px 2px gray;
    
    
    
`;


export default Main;