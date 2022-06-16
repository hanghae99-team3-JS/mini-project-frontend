import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from '../../shared/Cookies';

const HeaderLogin = () => {

    const navigate = useNavigate();



    const logOutHandler = () => { 
        deleteAllCookies(); 
        
    
    }

    return (


        <HeaderWrap>            
            <ContentWrap>
                <LogOut
                onClick={()=>{
                logOutHandler();
                navigate('/login');
                }}>LOGOUT</LogOut>
            </ContentWrap>
        </HeaderWrap>

    )
}

const HeaderWrap = Styled.header`
    margin: 30px 0px 0px 0px;    
    display: flex;
    flex-direction: flex;
    
`;


const H1 = Styled.h1`    
    font-size: 60px;
    font-family: 'DungGeunMo';
    margin-left: 40px;
    
`;

const ContentWrap = Styled.div`
    margin-left: 1000px;
    display: column;
    position: absolute;

`;



const LogOut = Styled.button`
    width: 100px;
    height: 50px;
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
    background-color: #FDD835;
    font-family: 'DungGeunMo';

`;




export default HeaderLogin;