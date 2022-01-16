import { CREATE_COLECTIONS, DELETE_COLECTIONS, EDIT_COLECTIONS, SHOW_COLECTIONS, READ_COLLECTIONS } from "./types";

const initialState = {
    colections:[],
    keyID:[]
}

export const colectionsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SHOW_COLECTIONS: return{...state, keyID: action.payload}
        case CREATE_COLECTIONS: return{...state, colections: state.colections.concat(action.payload)}
        case DELETE_COLECTIONS: return{...state, colections: state.colections.filter(data => data.keyID !== action.payload)}
        case EDIT_COLECTIONS: return{}
        case READ_COLLECTIONS: return{...state, colections:action.payload}
        default: return state;
    }
}