import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    header: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
    },
});



export const apis = {
    // users
    signup: (email, nickname, password, confirmpassword) =>
    api.post('/signup',{
        email: email,
        nickname: nickname,
        password: password,
        confirmpassword: confirmpassword,
    }),
    
}
