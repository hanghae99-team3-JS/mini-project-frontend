import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
// import {__getPosts} from '../Redux/modules/words'

import Card from '../components/Card';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { __getPosts } from '../redux/modules/prac';

export default function Main() {
  const dispatch = useDispatch();
  const {loading, error, list } = useSelector((state) => state.postReducer);
  console.log(list)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (loading) {
    return <p>LOADING</p>;
  }

  //26 35 안쓰기
//   if (error) {
//     return <p>ERROR</p>;
//   }

//   const typeThree = list.filter((value)=> value.type === 3 ).map((value)=>{
//     return <CardSecond></CardSecond>
//   })
//   const typeOne = list.filter((value)=> value.type === 1 ).map((value)=>{
//     return <Card></Card>
//   })


  return (
        <>
        {/* {typeThree}
        {typeOne} */}
        <Wrap>
            <CardWrap>
                <Card />
            </CardWrap>
            <ButtonWrap>
                <StButton
                onClick={() => {
                    navigate('/write')
                }}
                >
                    추가하기
                </StButton>
            </ButtonWrap>
        </Wrap>
        </>
  )
}

const Wrap = styled.div`
    display: column;
    position: relative;
`;

const CardWrap = styled.div`

    width: 400px;
    height:400px;
    margin: 300px auto;
    margin-left: 100px;
    position: absolute;
`;


const ButtonWrap = styled.div`
    
`;

const StButton = styled.button`
    width: 300px;
    height: 80px;
    margin-top: 950px;
    margin-left: 400px;
    position: absolute;    
    background-color: #FDD600;
    border-color: #FDD835;       
    padding-top: 5px;
    border-radius: 15px;
    font-size: 40px;
    font-family: 'DungGeunMo';    
    box-shadow: 2px 2px 2px 2px gray;
`;