import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    return (
        <HeaderWrap>            
            <H1><J>J</J>avascript <J>S</J>tudy</H1>
            <LoginSignWrap>
                <Login onClick={()=>{
                    navigate("/login");
                }}>LOGIN</Login>
                <SignUp onClick={()=>{
                    navigate('/signup');
                }}>SIGN UP</SignUp>
            </LoginSignWrap>
        </HeaderWrap>
    )
}

const HeaderWrap = Styled.header`
    margin: 30px 0px 0px 0px;    
    display: flex;
    
`;

const H1 = Styled.h1`
    margin-left: 50px;
    margin-top: -25px;
    font-size: 60px;
    font-family: 'DungGeunMo';
`;

const J = Styled.span`
    color: #FDD835;
`;


const LoginSignWrap = Styled.div`
    margin-left: 1200px;
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