import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Header = () => {




    const navigate = useNavigate();



    return (
    <>
        <HeaderWrap>
        <H1 onClick={()=>{
            navigate('/');
        }}><J>J</J>avascript <J>S</J>tudy</H1>
            <LoginSignWrap>
                <Login onClick={()=>{
                    navigate("/login");
                }}>LOGIN</Login>
                <SignUp onClick={()=>{
                    navigate('/signup');
                }}>SIGN UP</SignUp>
            </LoginSignWrap>
            
        </HeaderWrap>
    </>
    )
}


const HeaderWrap = Styled.header`    
    width: 1px;
    height: 10px;
    display: flex;
    
    
`;

const H1 = Styled.h1`    
    font-size: 60px;
    font-family: 'DungGeunMo';
    margin-left: 40px;
    
`;

const J = Styled.span`
    color: #FDD835;
`;


const LoginSignWrap = Styled.div`
    margin-left: 100px;
    margin-top: 60px;
    display: flex;
    

`;

const Login = Styled.button`
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    background-color: #FAFAFA;
    font-family: 'DungGeunMo';

`;


const SignUp = Styled.button`
    width: 100px;
    height: 50px;
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
    background-color: #FDD835;

`;





export default Header;