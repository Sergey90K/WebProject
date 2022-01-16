import { ADD_USER, DELETE_USER, READ_DATA, LOGIN_USER,LOGOUT_USER} from "./types";

const initialState = {tables:[], userData:[] }

export const userReducer =  (state = initialState,action) => {
switch(action.type){
    case DELETE_USER: return{ ...state , tables: state.tables.filter(data => data.keyID !== action.payload) }
    case READ_DATA: return{ ...state, tables: action.payload }
    case ADD_USER: return{...state , tables: state.tables.concat(action.payload)}
    case LOGIN_USER:return{...state, userData: state.userData.concat(action.payload)}
    case LOGOUT_USER: return{...state, userData: []}
    default: return state;
}
}