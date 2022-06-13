import React from 'react'
import styled from 'styled-components'


const Mypage = () => {
  
  return (
    
    <Boxfather>
    <Boxdown>   
      <Boxslice>
      <Box>Mypage</Box>
      <Faker/>      
      </Boxslice>
      <NewBox>
        <div>
          <PicP>프로필사진</PicP>
        </div>
        <PicInput type="file"/><br/>
        <IdP>아이디</IdP>
        <IdInput type="text"/><br/>
        <NickP>닉네임</NickP>
        <NickInput type="text"/><br/>
      <Circle>
        수정
      </Circle>
      </NewBox>
    </Boxdown>
  </Boxfather>
  )
  
}



const Boxfather = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
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
  background-color: #FFFDE7;
  display: flex;
  width: 1100px;
  height: 100px;
  /* border: 1px solid #000; */
  
`;

const Faker = styled.div`
  background-color:  #FFFDE7;
  flex: 7;
`


const PicP = styled.p`
  margin-left:320px;
  margin-top: 80px;
  font-size: 40px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position:absolute;
`

const PicInput = styled.input`
  border-radius: 15px;
  width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 180px;
  margin-left: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: 'DungGeunMo';
  position: absolute;

`


const IdInput = styled.input`
  border-radius: 15px;
  width: 350px;
  height: 40px;
  margin-left: 450px;
  margin-top: 300px;
  font-size: 30px;

`

const IdP = styled.p`
  margin-left:320px;
  margin-top: 300px;
  font-size: 40px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position:absolute;
`

const NickInput = styled.input`
  border-radius: 15px;
  width: 350px;
  height: 40px;
  margin-left: 450px;
  margin-top: 90px;
  font-size: 30px;

`

const NickP = styled.p`
  margin-left:320px;
  margin-top: 80px;
  font-size: 40px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position:absolute;
`
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #FAFAFA;
  margin-left: 950px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFA700;
  font-weight: bold;
  font-size: 30px;
  font-family: 'DungGeunMo';

`

export default Mypage