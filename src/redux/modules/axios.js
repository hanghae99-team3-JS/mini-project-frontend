import axios from 'axios';
axios.defaults.withCredentials = true;

export const instance = axios.create({
	baseURL: "http://3.39.161.93:5000",
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',		
	},
});

// 헤더에 토큰 보내기
instance.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];    
	config.headers.common['Authorization'] = `${accessToken}`;
	return config;
});

export const apis = {
	// user	
	signup: (email, nickname, password, confirmpassword) =>
		instance.post("/api/test", {
			email: email,
			nickname: nickname,
			password: password,
			confirmpassword: confirmpassword,
		}),
    login: (email, password) =>
        instance.post("api/login", {email: email , password: password}),

	auth: () => instance.get('/api/auth'),

	



};