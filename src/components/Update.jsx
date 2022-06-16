import React, {useRef} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __updatePost } from '../redux/modules/prac';
import Styled from "styled-components";


function Update() {
  const { loading, error } = useSelector((state) => state.postReducer);
  const { id, num } = useParams();
  const {list} = useSelector(state=>state.postReducer)
  console.log(id, num)
  const title = useRef();
  const content = useRef();
  const data = list.find((value)=>{ return value.postId === +id })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const onUpdateHandler = () => { navigate(`/update/${data.postId}`); };

  const calcelHandler = () => {
    navigate(-1);
  }
  const textChg = () => {
    if (
      title.current.value !== "" &&
      content.current.value !== "" 
    ) {
      dispatch(
        __updatePost(
          {
            title: title.current.value,
            content: content.current.value,
          },
          // num,
          data.postId
        )
      );
      alert("단어 저장 완료 ! ");
      navigate("/");
    } else {
      alert("빈칸 없이 작성해 주세요 ! ");
    }
  };

  if (loading) {
    return <p>sdadsa</p>;
  }
  if (error) {
    return <p>i don't know</p>;
  }
  return (
    <Wrap>
      <Title>TITLE</Title>
      <Input type="text" ref={title} />
      <Title>CONTENT</Title>
      <Input type="text" ref={content} />
      <ButtonWrap>
        <Button onClick={textChg}> 수정 </Button>
        <Button onClick={calcelHandler}> 취소 </Button>
      </ButtonWrap>
    </Wrap>
  )
}

const Wrap = Styled.div`
  position: absolute;
  display: column;
  margin: 200px auto;
  margin-left: 20px;
  
`;

const Title = Styled.p`
  font-family: 'DungGeunMo';
  font-size: 60px;
  margin-left: -350px;
`;

const Input = Styled.input`
  width: 800px;
  height: 150px;
  margin-left: 200px;
  font-family: 'DungGeunMo';
  font-size: 50px;
`;

const ButtonWrap = Styled.div`
  position: absolute;
  display: flex;
`;

const Button = Styled.button`
  width: 200px;
  height: 80px;
  background-color: #FDD600;
  border-color: #FDD835;       
  padding-top: 5px;
  border-radius: 15px;
  font-size: 40px;
  font-family: 'DungGeunMo';
  margin: auto;
  margin-left: 300px;
  margin-top: 40px;
  box-shadow: 2px 2px 2px 2px gray;
`;
export default Update;