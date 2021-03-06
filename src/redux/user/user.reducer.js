import {UserActionTypes} from './user.types';

const INITIAL_STATE={
    user:null
};

const userReducer=(state=INITIAL_STATE,action)=>{
    if(state)
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
        default:{
            return state;
        }
    }
};

export default userReducer;