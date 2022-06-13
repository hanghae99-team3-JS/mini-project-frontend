import React, { useState } from "react";
import Styled from "styled-components";
import { loginUser } from "../redux/modules/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ LoginInputs , setLoginInputs ] = useState({
        email: "",
        password: ""
    });

    const { email , password } = LoginInputs;

    const onChange = (e) => {
        const { value , name } = e.target;

        setLoginInputs({
            ...LoginInputs,
            [name]: value
        });

        console.log(e.target.value);
    };

    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const onLoginHandler = () => {

        
        
    }; 

    return (
    <>
        <Wrap>
            <ContentsWrap>
                <H1>로그인</H1>
                <ID>아이디</ID>
                <IdInput type="email" name={email} onChange={onChange} placeholder="이메일형식으로 입력해주세요" ref={id_ref} />
                <PW>비밀번호</PW>
                <PwInput type="password" name={password} onChange={onChange} placeholder="패스워드를 입력해주세요" ref={pw_ref}/>
            </ContentsWrap>
                <ButtonWrap>
                    <Button onClick={()=>{
                        onLoginHandler();
                    }}>로그인</Button>
                </ButtonWrap>
        </Wrap>
    </>
    )
}


const Wrap = Styled.div`
    margin-top: 200px;
    margin: auto;
`;

const ContentsWrap = Styled.div`
    margin-bottom: 30px;
    margin-top: -300px;
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
    box-shadow: 2px 2px 2px 2px gray;
`;

export default Login;