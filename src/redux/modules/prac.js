/*eslint-disable*/
import apis1 from "../modules/apis";

const initialState = {
    list: [],
    loading: false,
    error: null,
}

// action type
const ADD_POST = "gram/ADD_POST";
const DELETE_POST = "gram/DELETE_POST";
const UPDATE_POST = "gram/UPDATE_POST";
const GET_POST = 'post/GET_POST'

// 서버에서 요청
const GET_POST_REQUEST = "gram/GET_POST_REQUEST";
const GET_POST_SUCCESS = "gram/GET_POST_SUCCESS";
const GET_POST_ERROR = "gram/GET_POST_ERROR";

// action creator 액션
export const addPost = (payload) => {
    return { type: ADD_POST, payload };
  };
  export const getPost = (payload) => ({type: GET_POST, payload})

  export const deletePost = (payload) => {
    return { type: DELETE_POST, payload };
  };
  export const updatePost = (payload) => {
    return { type: UPDATE_POST, payload };
  };
  const getPostRequest = (payload) => {
    return { type: GET_POST_REQUEST, payload };
  };
  
  const getPostSuccess = (payload) => {
    return { type: GET_POST_SUCCESS, payload };
  };
  
  const getPostError = (payload) => {
    return { type: GET_POST_ERROR, payload };
  };

// 가져오기
export const __getPosts = () => async(dispatch, getState) => {
  // const myToken = getCookie("Authorization");
  dispatch(getPostRequest(true))
  try{
      const response = await apis1.get(`/api/posts`,
      // {
      //     headers: {
      //       'Authorization': `Bearer ${myToken}`,
      //     }
      //   }
        )
        console.log(response)
        dispatch(getPost(response.data.posts));
  }catch(error){
      dispatch(getPostError(error))
  }finally{
      dispatch(getPostRequest(false))
  }
}
//   export const getPostOneDB =
//   (id) =>
//   async (dispatch, getState, { history }) => {
//     try {
//       const { data } = await apis.postOne(id);

//       let resultLiked = data.result.liked;
//       dispatch(setLike(resultLiked));
//       dispatch(setPostOne(data.result));
//     } catch (e) {
//       console.log("디테일 가져오기 실패");
//     }
//   };
  
  // 메모 추가하기
  export const __addPost = (payload) => async (dispatch, getState) =>{
    console.log(payload)
    // const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const data = await apis1.post(`/api/posts`, {
          title: payload.title,
          content: payload.content,
          nickname: "sinyoung",
          category: "Javascript"
        },
        // {
        //     headers: {
        //       'Authorization': `Bearer ${myToken}`,
        //     }
        //   }
          );
          console.log(data)
          dispatch(addPost(data.data))
    }catch(error){
        alert(error)
    }finally{
        dispatch(getPostRequest(false))
    }
}

  
//   메모 수정하기
  // export const __updatePost = (payload, index) => async (dispatch, getState) => {
  //   console.log(payload)
  //   const docRef = await apis.postEdit({nickname:"sinyoung",title:"title",content:"content"})
  //   // await updateDoc(docRef, {
  //   //   title: payload.title,
  //   //   content: payload.content,
  //   //   postId: payload.postId,
  //   // });
  //   dispatch(updatePost({ payload, index  }));
  // };

  export const __updatePost = (payload,index) => async (dispatch, getState) =>{
    // const myToken = getCookie("Authorization");
    console.log(payload.index)
    dispatch(getPostRequest(true))
    try{
        const request = await apis1.put(`/api/posts/${index}`,{
          nickname: "sinyoung",
          title: payload.title,
          content: payload.content,

            // headers: {
            //   'Authorization': `Bearer ${myToken}`,
            // }
          } 
          );
        dispatch(updatePost(request.data))
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}


  // 메모 삭제하기
  export const __deletePost = (postId) => async (dispatch, getState) => {
    // const myToken = getCookie("Authorization");
    dispatch(getPostRequest(true))
    try{
        const msg = await apis1.delete(`/api/posts/${postId}`,{
          nickname:"sinyoung",
            // headers: {
            //   'Authorization': `Bearer ${myToken}`,
            // }
          }
          );
          alert(msg.data)
        dispatch(deletePost(payload));
    }catch(error){
        dispatch(getPostError(error))
    }finally{
        dispatch(getPostRequest(false))
    }
}
  
//reducer
const postReducer = (state = initialState, action = {}) => {
  console.log(action.payload)
  console.log(action)
    switch (action.type) {
      case ADD_POST:
        return { 
          ...state, 
          list: [...state.list, action.payload] 
        };

      case GET_POST:
         return{ ...state, list:action.payload}

      case GET_POST_REQUEST:
        return { ...state, loading: action.payload };
  
      case GET_POST_SUCCESS:
        return { ...state, list: [...action.payload] };
      
        case UPDATE_POST:
          const newChangePost = state.list.map((value) => {
              console.log(value.postId, payload.postId)
              return value.postId === Number(payload.postId) ? payload : value;
          });
          return { ...state, list: newChangePost };
          case DELETE_POST:
            const newDeletedPost = state.list.filter((value) => {
                return value.postId !== Number(payload);
            });
            return { ...state, list: [...newDeletedPost] };
      default:
        return state;
    }
  };
  export default postReducer;
  