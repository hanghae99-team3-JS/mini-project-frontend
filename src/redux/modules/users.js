import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/cookies";


// action

const LOG_IN = "users/LOG_IN";
const LOG_OUT = "users/LOG_OUT";
const LOAD_TOKEN = "users/LOAD_TOKEN"



// initialState

const initialState = {
        email: "",
        nickname: "",
        password: "",
        confirmpassword: "",
        is_login: false,
    };


// action creator

const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loadToken = createAction(LOAD_TOKEN, (token) => ({token}));


// middleware


// 토큰로드 액션

const loadTokenDB = () => {
    return function (dispatch) {
        if (getCookie("Authorization")){
            dispatch(loadToken());
        }
    };
};

// 회원가입 액션

const signupDB = (email, nickname, password, confirmpassword) => {
    return function (dispatch, getState) {
        axios
        .post("http://localhost:5001/users", {
            email: email,
            nickname: nickname,
            password: password,
            confirmpassword: confirmpassword,
        })
        .then(response => {
            console.log(response);
            window.alert("회원가입을 축하합니다.");
            
        })
        .catch(error => {
            alert("중복된 이메일이 존재합니다.");
            console.log("회원가입 에러", error);
        })
    };
};

//reducer

export default handleActions (
    initialState
);


const actionCreators = {
    signupDB,
    loadTokenDB,
};

export {actionCreators};