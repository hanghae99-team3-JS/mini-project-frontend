import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// 액션 실행
import { useDispatch } from "react-redux";
// 추가 액션함수
import { __addPost } from "../redux/modules/prac";
import Styled from "styled-components";

 function Write() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = useRef();
  const content = useRef();
  const nickname = useRef();


  // 저장 onclick 이벤트
  const textSave = () => {
    if (
      title.current.value !== "" &&
      content.current.value !== ""
    ) {
      dispatch(
        __addPost({
          title: title.current.value,
          content: content.current.value,
          // nickname: nickname.current.value,
          // type:1,
        })
      );
      alert("단어 저장 완료 ! ");
      navigate('/');
    } else {
      alert("빈칸 없이 작성해 주세요 ! ");
    }
  };

  return (
    <>
      <Wrap>
        <InputWrap>
          <Input type="text" ref={title} />
          <Title>설명</Title>
          <Input type="text" ref={content} />
          <Title>예시</Title>
          <ButtonWrap>
          <Button
            onClick={() => {
              textSave();
              
            }}>저장하기</Button>
            </ButtonWrap>
          </InputWrap>
        </Wrap>
    </>
  )

};

const Wrap = Styled.div`
  display: column;
  position: relative;
  
`;

const InputWrap = Styled.div`
  position: absolute;
  margin: 350px auto;
  margin-left: 400px;

`;

const Title = Styled.span`
  font-family: 'DungGeunMo';
  font-size: 80px;
  margin-top: 30px;
  
`;

const Input = Styled.input`
  width: 600px;
  height: 80px;
  margin-top: 20px;
`;

const ButtonWrap = Styled.div`
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
    margin-left: 60px;
    margin-top: 50px;
    box-shadow: 2px 2px 2px 2px gray;
`;
export default Write;
