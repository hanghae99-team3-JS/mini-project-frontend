import React, {  useState } from "react";
import Styled from "styled-components";
import { actionCreators as useActions } from "../redux/modules/users"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [email , setEmail] = useState();
    const [nickname , setNick ] = useState();
    const [password , setPw] = useState();    
    const [confirmpassword , setconfirmPW] = useState();



    const signupDB = async (e) => {

        e.preventDefault();

        if (email === "" || password === "" || confirmpassword === "") {
            window.alert("아이디와 비밀번호를 모두 입력해주세요!");
            return;
          }
          dispatch(useActions.signupDB(email, nickname, password, confirmpassword));
          navigate("/login");
        };
        
        


    return (
    <>
        <Wrap>
            <H1>회원가입</H1>
            <ContentsWrap>
                <ID>이메일</ID>
                <Input 
                    label="" 
                    type="email"  
                    value={email || ""}
                    onChange={(e)=>{
                    setEmail(e.target.value);                    
                }} 
                placeholder="이메일형식으로 입력해주세요" />
                <NickName>닉네임</NickName>
                <Input 
                    label="" 
                    type="text" 
                    value={nickname ||""}
                    onChange={(e)=>{
                    setNick(e.target.value);                    
                }} 
                placeholder="닉네임을 입력해주세요"/>
                <PW1>비밀번호</PW1>
                <Input 
                    label="" 
                    type="password"
                    value={password ||""}
                    onChange={(e)=>{
                    setPw(e.target.value);                    
                    }} 
                    placeholder="패스워드를 입력해주세요"/>
                <PW2>비밀번호 확인</PW2>
                <Input 
                    label="" 
                    type="password"
                    value={confirmpassword||""} 
                    onChange={(e)=>{
                    setconfirmPW(e.target.value);                    
                    }} 
                    placeholder="패스워드를 다시 입력해주세요" />
                <div>
                <Button 
                onClick={signupDB}>가입하기</Button>
                </div>
            </ContentsWrap>
        </Wrap>
    </>
    )
}

const Wrap = Styled.div`
    margin: 250px auto;
    margin-left: 400px;
    position: absolute;
`;

const ContentsWrap = Styled.div`
    margin-bottom: 30px;
    
`;


const H1 = Styled.h1`
    font-size: 50px;
    font-family: 'DungGeunMo';
`;

const ID = Styled.p`
    margin-left: -450px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const NickName = Styled.p`
    margin-left: -450px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW1 = Styled.p`
    margin-left: -420px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW2 = Styled.p`
margin-left: -370px;
font-size: 20px;
font-weight: bold;
font-family: 'DungGeunMo';
`;

const Input = Styled.input`
    width: 500px;
    height: 60px;
    border-radius: 15px;
    font-size: 20px;
    font-family: 'DungGeunMo';
    border-color: #FFFDE7;
    
`;

const Button = Styled.button`
    width: 500px;
    height: 90px;
    background-color: #FDD600;
    border-color: #FDD600;
    font-size: 40px;
    font-family: 'DungGeunMo';
    padding-top: 10px;
    border-radius: 15px;
    margin-top: 30px;
    box-shadow: 2px 2px 2px 2px gray;
`;

export default SignUp;