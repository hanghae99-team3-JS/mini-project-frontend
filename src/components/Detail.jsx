import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// 액션 실행
import { useSelector, useDispatch } from "react-redux"; 
import {__deletePost} from '../redux/modules/prac';
import Styled from "styled-components"

 function Detail() {
  const { id, num } = useParams();
  const { loading, error, list } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentCard = list[num];
  const data = list.find((value)=>{ return value.postId === +id })

  console.log(id)

  const delPost = (index_id) => {
    console.log(index_id)
    dispatch(__deletePost(index_id));
    alert("삭제됐습니다");
    navigate(-1)
  };

  if (loading) {
    return <p>로딩</p>;
  }

//25 27 안쓰기
  // if (error) {
  //   return <p>에러</p>;
  // }

  

  return (
    <Wrap>
      {/* <P>{currentCard.id}</P> */}

      <P>{currentCard.title}</P>
      <P>{currentCard.content}</P>
      <ButtonWrap>
        <Button onClick={()=>(navigate(`/update/${id}`))}> 수정 </Button>
        <Button onClick={()=>{delPost(data.postId)}}> 삭제 </Button>        
      </ButtonWrap>
    </Wrap>
  )
}

const Wrap = Styled.div`
  position: absolute;
  display: column;
  margin-left: 200px;
`;



const P = Styled.p`
  width: 400px;
  height: 200px;
  margin-top: 250px;
  box-shadow: 2px 2px 2px 2px gray;
  border-color: #FFFDE7;
  font-family: 'DungGeunMo';
  font-size: 30px;
  background-color: #FDD600;
  padding-top: 40px;
`;

const ButtonWrap = Styled.div`
  display: flex;
  margin: auto;  
`;

const Button = Styled.div`
    width: 100px;
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

export default Detail;