import { ADD_USER, DELETE_USER, READ_DATA, LOGIN_USER,LOGOUT_USER, BACK_ACCOUNT,BACK_ACOUNT_N,SET_THEME_LIGHT,SET_THEME_DARK} from "./types";

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
    case SET_THEME_LIGHT: return{...state, userData: state.userData.map(str => { return {...str , theme: 'light'} })}
    case SET_THEME_DARK: return{...state, userData: state.userData.map(str => { return {...str , theme: 'dark'} })}
    default: return state;
}
}