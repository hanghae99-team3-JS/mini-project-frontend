import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";


const HeaderLogin = () => {

    const navigate = useNavigate();

    return (
        <HeaderWrap>
            <H1><J>J</J>avascript <J>S</J>tudy</H1>
            <ContentWrap>
                <Profile>프로필사진</Profile>                
                <NickName>닉네임</NickName>
                <PageLogoutWrap>
                    <MyPage onClick={()=>{
                        navigate('/mypage');
                    }}>MY PAGE</MyPage>
                    <LogOut>LOGOUT</LogOut>
                </PageLogoutWrap>
            </ContentWrap>            
            
        </HeaderWrap>
    )
}

const HeaderWrap = Styled.header`
    margin: 30px 0px 0px 0px;    
    display: flex;
    
`;

const H1 = Styled.h1`
    margin-left: 50px;
    margin-top: -25px;
    font-size: 60px;
    font-family: 'DungGeunMo';
`;

const J = Styled.span`
    color: #FDD835;
`;


const ContentWrap = Styled.div`
    margin-left: 1000px;
    display: flex;
`;

const Profile = Styled.div`
    width: 80px;
    height: 80px;
    margin-top: -10px;
    border-radius: 80px;
    background-color: #BDBDBD;
    
`;


const NickName = Styled.h3`
    margin-left: 20px;
    margin-top: 15px;
    font-family: 'DungGeunMo';
`;


const PageLogoutWrap = Styled.div`
    

`;

const MyPage = Styled.button`
    width: 150px;
    height: 50px;
    margin-left: 20px;    
    font-size: 20px;
    font-weight: bold;
    background-color: #FAFAFA;
    font-family: 'DungGeunMo';

`;


const LogOut = Styled.button`
    width: 100px;
    height: 50px;
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
    background-color: #FDD835;
    font-family: 'DungGeunMo';

`;


export default HeaderLogin;