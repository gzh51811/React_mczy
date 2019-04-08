



import axios from 'axios';


import { FETCH_TOKEN } from './type'






export function fetchToken() {
    return {
        type: FETCH_TOKEN
    }
}



export function signin(username, password) {
   //异步回调，可用redux-sagajiejue
    return{
        type: FETCH_TOKEN 
        
    }
}

function signin2(username, password) {
    return async (dispatch) => {
        
        console.log(212)
        
    }
}

export {
    signin2
}

export default {
    signin,
    fetchToken
}