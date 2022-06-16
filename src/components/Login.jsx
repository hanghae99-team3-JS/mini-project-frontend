import React, { useState, useRef, useEffect } from "react";
import Styled from "styled-components";
import { actionCreators as userActions } from "../redux/modules/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();

    const loginDB = () => {
        if (email === "" || password === "") {
            window.alert("아이디와 비밀번호를 모두 입력해주세요!");
            return;
        }
        try{
          dispatch(userActions.loginDB(email, password));
        
        }catch(error){
          navigate("/login");
          window.alert("아이디 또는 비밀번호를 확인해주세요.");
          console.log("Login Error", error);
        }finally{
          alert("......")
        }
        navigate("/");
    };




    return (
    <>
    
        <Wrap>
            <ContentsWrap>
                <H1>로그인</H1>
                <ID>아이디</ID>
                <IdInput 
                label=""
                type="email" 
                onChange={(e)=>{
                    setEmail(e.target.value);}} 
                placeholder="이메일형식으로 입력해주세요"/>
                <PW>비밀번호</PW>
                <PwInput 
                label=""
                type="password" 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }} 
                placeholder="패스워드를 입력해주세요" />
            </ContentsWrap>
            <ButtonWrap>
                <Button onClick={()=>{
                    loginDB();
                }}>로그인</Button>
            </ButtonWrap>
        </Wrap>
    </>
    )
}


const Wrap = Styled.div`
    
    margin: auto;
    position: absolute;

`;

const ContentsWrap = Styled.div`
    margin-bottom: 30px;
    margin-top: 250px;
    margin-left: 300px;
`;

const H1 = Styled.h1`
    font-size: 50px;
    font-family: 'DungGeunMo';
`;

const ID = Styled.p`
    margin-left: -400px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW = Styled.p`
    margin-left: -380px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const IdInput = Styled.input`
    width: 500px;
    height: 80px;
    border-radius: 15px;
    font-size: 20px;
    border-color: #FFFDE7;
    font-family: 'DungGeunMo';
    
`;
const PwInput = Styled.input`
    width: 500px;
    height: 80px;
    border-radius: 15px;
    font-size: 20px;
    border-color: #FFFDE7;
    font-family: 'DungGeunMo';
    
`;

const ButtonWrap = Styled.div`
    margin-top: 10px;
`;

const Button = Styled.div`
    width: 500px;
    height: 80px;
    background-color: #FDD600;
    border-color: #FDD835;       
    padding-top: 35px;
    border-radius: 15px;
    font-size: 40px;
    font-family: 'DungGeunMo';
    margin: auto;
    margin-left: 300px;
    box-shadow: 2px 2px 2px 2px gray;
`;

export default Login;