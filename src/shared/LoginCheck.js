// 로그인, 회원가입 유효성 검사 파일

// 아이디 형식 검사
export const idCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  
    return _reg.test(email);
  }
  // 비밀번호 체크
  
  export const passwordCheck = (password) => {
    let regPass = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{6,20}$/;
  
    return regPass.test(password);
  }
  // 정규식
  // ^ => 시작
  // (?=.*\d) => 0~9까지의 숫자 표현
  // (?=.*[a-zA-Z]) => 알파벳