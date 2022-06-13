import React, { useState } from "react";
import Styled from "styled-components";
import { actionCreators } from "../redux/modules/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ inputs , setInputs ] = useState({
        email: "",
        nickname: "",
        password: "",
        confirmpassword: ""
    });

    const { email , nickname , password , confirmpassword } = inputs;

    const onChange = (e) => {
        const {value , name} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
        
        console.log(e.target.value);
    };

    

    const id_ref = React.useRef(null); 
    const name_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const onSubmitHandler = () => {


        if (password !== confirmpassword) {
            return alert ('비밀번호가 같아야 합니다.');
        }

        if (email === "" || nickname === "" || password === "" || confirmpassword === "" ) {
            window.alert ("이메일, 닉네임, 비밀번호를 모두 입력해주세요");
            return;
        }
        dispatch(actionCreators.signupDB(email,nickname,password,confirmpassword));
    };


    return (
    <>
        <Wrap>
            <H1>회원가입</H1>
            <ContentsWrap>                
                    <ID>아이디</ID>
                    <Input type="email" name={email} onChange={onChange} placeholder="이메일형식으로 입력해주세요" ref={id_ref} />
                    <NickName>닉네임</NickName>
                    <Input type="text" name={nickname} onChange={onChange} placeholder="닉네임을 입력해주세요" ref={name_ref} />
                    <PW1>비밀번호</PW1>
                    <Input type="password" name={password} onChange={onChange} placeholder="패스워드를 입력해주세요" ref={pw_ref}/>
                    <PW2>비밀번호 확인</PW2>
                    <Input type="password" name={confirmpassword} onChange={onChange} placeholder="패스워드를 다시 입력해주세요" ref={pw_ref}/>
                    <Button onClick={()=>{
                        onSubmitHandler();
                        navigate('/');
                    }}>가입하기</Button>                
            </ContentsWrap>
        </Wrap>
    </>
        
    )
}

const Wrap = Styled.div`
    margin: 130px auto;
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

const Button = Styled.div`
    width: 500px;
    height: 90px;
    background-color: #FDD600;
    border-color: #FDD600;
    font-size: 40px;
    font-family: 'DungGeunMo';
    padding-top: 40px;
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 2px 2px 2px 2px gray;
`;

export default SignUp;