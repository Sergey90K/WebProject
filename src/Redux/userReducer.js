import { ADD_USER, DELETE_USER, READ_DATA, LOGIN_USER,LOGOUT_USER, BACK_ACCOUNT,BACK_ACOUNT_N} from "./types";

const initialState = {tables:[], userData:[], backAccount:[]}

export const userReducer =  (state = initialState,action) => {
switch(action.type){
    case DELETE_USER: return{ ...state , tables: state.tables.filter(data => data.keyID !== action.payload) }
    case READ_DATA: return{ ...state, tables: action.payload }
    case ADD_USER: return{...state , tables: state.tables.concat(action.payload)}
    case LOGIN_USER:return{...state, userData: [action.payload]  }
    case LOGOUT_USER: return{...state, userData: [] , backAccount:[] }
    case BACK_ACCOUNT: return{...state, backAccount: state.userData, userData: [action.payload] }
    case BACK_ACOUNT_N: return{...state, userData: state.backAccount, backAccount: [] }
    default: return state;
}
}