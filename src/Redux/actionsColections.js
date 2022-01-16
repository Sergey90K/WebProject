import axios from "axios";
import { CREATE_COLECTIONS, DELETE_COLECTIONS, EDIT_COLECTIONS, SHOW_COLECTIONS, READ_COLLECTIONS } from "./types";

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