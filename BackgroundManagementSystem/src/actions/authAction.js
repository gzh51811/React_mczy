



import axios from 'axios';


import { FETCH_TOKEN } from './type'






function fetchToken() {
    return {
        type: FETCH_TOKEN
    }
}



function signin(username, password) {
   //异步回调，可用redux-sagajiejue
    return async (dispatch) => {
        try {
            dispatch(fetchToken());

            const res = await axios.post('/aip/login', {
                params: {
                    username,
                    password
                }
            });

            console.log(res)
        } catch (error) {
            
        }
    }
}

export {
    signin
}