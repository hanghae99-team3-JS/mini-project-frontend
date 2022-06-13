import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Category2 = () => {

  const navigate = useNavigate();
  
    return (
      <Boxfather>
        <Boxdown>   
          <Boxslice>
          <Box>중급</Box>
          <Faker/>      
          </Boxslice>
          <NewBox></NewBox>
        </Boxdown>
        <Button onClick={()=>{
            navigate('/write');
          }}>글 작성하기</Button>
      </Boxfather>
    )
    
  }
  
 
  
  const Boxfather = styled.div`
     display: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  `
  
  const NewBox = styled.div`
    background-color: #FDD600;
    width: 1100px;
    height: 700px;
    box-shadow: 2px 2px 2px 2px gray;
  `
  
  
  const Box = styled.div`
    flex: 3;
    background-color: #FDD600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
    font-family: 'DungGeunMo';
    
    
  `;
  
  const Boxdown = styled.div`
    
    margin-top: 100px;

    
  `;
  
  const Boxslice = styled.div`
    background-color: white;
    display: flex;
    width: 1100px;
    height: 100px;
    /* border: 1px solid #000; */
    
  `;
  
  const Faker = styled.div`
    background-color: #FFFDE7;
    flex: 7;
  `;

const Button = styled.div`
background-color: #FDD600;
width: 1000px;
height: 100px;
border-radius: 15px;
margin: 50px auto;
font-size: 40px;
padding-top: 50px;
font-family: 'DungGeunMo';
box-shadow: 2px 2px 2px 2px gray;
`;

 export default Category2