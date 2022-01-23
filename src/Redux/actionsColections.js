import axios from "axios";
import { CREATE_COLECTIONS, DELETE_COLECTIONS, EDIT_COLECTIONS, SHOW_COLECTIONS, READ_COLLECTIONS , SET_TRUE_FLAG, 
    SET_FALSE_FLAG, SET_ID_ITHEM, ADD_NEW_ITHEM, READ_ITHEMS, DELETE_ITHEM, ADD_NEW_TAG, READ_TEGS, DELECTE_TAG, CREATE_NAME_COLLECTIONS,
    READ_NAME_COLECTIONS,SET_KEY_ITHEMS} from "./types";

const urlDataUser = process.env.REACT_APP_URL

export function showColections(keyID){
    return{
        type: SHOW_COLECTIONS,
        payload: keyID
    }
}

export function createColections(inerData){
    let a;
    return (dispatch) => {axios.post(`${urlDataUser}/collections.json`,inerData)
    .then((response)=>{
        if (!response.statusText){
               throw new Error(response.statusText) 
        }return response
    }) 
    .then( (response)=> { a =  {...inerData, keyID: response.data.name} })
    .then( ()=> { dispatch(createColectionsSecces(a))      
    }) 
}   
}

export function deleteColections(keyID){
    return (dispatch) => {
        axios.delete(`${urlDataUser}/collections/${keyID}.json/`)
        .then(function (response) {
           if(!response.statusText){
              throw new Error(response.statusText) 
           }
           return response;
         })
       .then(dispatch(deleteColectionsSecces(keyID)))
   }
}

export function editColections(){
    return{
        type:EDIT_COLECTIONS
    }
}

function createColectionsSecces(data){
    return{
        type:CREATE_COLECTIONS,
        payload: data
    }
}

export function readCollections(){
    return (dispatch)=>{
        axios.get(`${urlDataUser}/collections.json`)
        .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
          .then(response=>{
            const rez =  Object.keys(response.data).map(key => {
            return{
                ...response.data[key],
                keyID:key
            } 
        }); return rez 
      })
      .then(masive=>{
        dispatch(readCollectionsSecces(masive))})
    }
}

function readCollectionsSecces(data){
  return{
      type: READ_COLLECTIONS,
      payload: data
  }
}

function deleteColectionsSecces(keyID){
    return{
        type: DELETE_COLECTIONS,
        payload: keyID
    }
}

export function setTrueFlag(data){
return {
    type: SET_TRUE_FLAG,
    payload: data
}
}

export function setFalseFlag(){
return {
    type:SET_FALSE_FLAG
}
}

export function setKeyIthem(data){
    return{
        type:SET_ID_ITHEM,
        payload: data
    }
}

export function addNewIthem(inerData){
    let a;
    return (dispatch) => {axios.post(`${urlDataUser}/ithems.json`,inerData)
    .then((response)=>{
        if (!response.statusText){
               throw new Error(response.statusText) 
        }return response
    }) 
    .then( (response)=> { a =  {...inerData, keyID: response.data.name} })
    .then( ()=> { dispatch(addNewIthemSecces(a))      
    }) 
}
}

function addNewIthemSecces(data){
    return{
        type:ADD_NEW_ITHEM,
        payload: data
    }
}

export function readAllIthems(){
    return (dispatch)=>{
        axios.get(`${urlDataUser}/ithems.json`)
        .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
          .then(response=>{
            const rez =  Object.keys(response.data).map(key => {
            return{
                ...response.data[key],
                keyID:key
            } 
        }); return rez 
      })
      .then(masive=>{
        dispatch(readAllIthemsSecces(masive))})
    }
}

export function readAllIthemsSecces(data){
return{
    type: READ_ITHEMS,
    payload: data
}
}

export function deleteIthem(keyID){
    return (dispatch) => {
        axios.delete(`${urlDataUser}/ithems/${keyID}.json/`)
        .then(function (response) {
           if(!response.statusText){
              throw new Error(response.statusText) 
           }
           return response;
         })
       .then(dispatch(deleteIthemSecces(keyID)))
   }
}

function deleteIthemSecces(keyID){
return{
    type: DELETE_ITHEM,
    payload: keyID
}
}

export function createNewTags(inerData){
    let a;
    return (dispatch) => {axios.post(`${urlDataUser}/tags.json`,inerData)
    .then((response)=>{
        if (!response.statusText){
               throw new Error(response.statusText) 
        }return response
    }) 
    .then( (response)=> { a =  {...inerData, keyID: response.data.name} })
    .then( ()=> { dispatch(createNewTagsSucces(a))      
    }) 
}
}

function createNewTagsSucces(data){
    return{
        type: ADD_NEW_TAG,
        payload: data
    }
}

export function readTags(){
    return (dispatch)=>{
        axios.get(`${urlDataUser}/tags.json`)
        .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
          .then(response=>{
            const rez =  Object.keys(response.data).map(key => {
            return{
                ...response.data[key],
                keyID:key
            } 
        }); return rez 
      })
      .then(masive=>{
        dispatch(readTagsSecces(masive))})
    }
}

function readTagsSecces(data){
    return{
        type:READ_TEGS,
        payload:data
    }
}

export function chandesTag(tag){
    return (dispatch) => {
        axios.delete(`${urlDataUser}/tags/${tag.keyID}.json/`)
        .then(function (response) {
           if(!response.statusText){
              throw new Error(response.statusText) 
           }
           return response;
         })
       .then(dispatch(deleteTagsSecces(tag.keyID)))
       .then(dispatch(createNewTags(tag)))
   }
}

function deleteTagsSecces(keyID){
    return{
        type: DELECTE_TAG,
        payload: keyID
    }
}

export function createNewNameCollections(inerData){
    let a;
    return (dispatch) => {axios.post(`${urlDataUser}/nameCollections.json`,inerData)
    .then((response)=>{
        if (!response.statusText){
               throw new Error(response.statusText) 
        }return response
    }) 
    .then( (response)=> { a =  {...inerData, keyID: response.data.name} })
    .then( ()=> { dispatch(createNewNameSucces(a))      
    }) 
}
}

function createNewNameSucces(data){
    return {
        type: CREATE_NAME_COLLECTIONS,
        payload: data
    }
}

export function readNameColections(){
    return (dispatch)=>{
        axios.get(`${urlDataUser}/nameCollections.json`)
        .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
          .then(response=>{
            const rez =  Object.keys(response.data).map(key => {
            return{
                ...response.data[key],
                keyID:key
            } 
        }); return rez 
      })
      .then(masive=>{
        dispatch(readNameColectionsSucces(masive))})
    }
}

function readNameColectionsSucces(data){
    return{
        type: READ_NAME_COLECTIONS,
        payload: data
    }
}

export function setKeyIthems(key){
    return{
        type:SET_KEY_ITHEMS ,
        payload: key
    }
}