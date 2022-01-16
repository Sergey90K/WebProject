import axios from 'axios';
import { DELETE_USER,ADD_USER, READ_DATA, LOGIN_USER, LOGOUT_USER} from "./types";

const urlDataUser = process.env.REACT_APP_URL

 function deleteUserSeccess(userID){
    return{
        type: DELETE_USER,
        payload: userID
    }
}

 function addUserSeccess(data){
    return{
        type: ADD_USER,
        payload:data
    }
}

 function readDataSuccess(masive){
    return{
        type: READ_DATA,
        payload: masive
    }
}

export function readData(){
    return (dispatch)=>{
        axios.get(`${urlDataUser}/data.json`)
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
        dispatch(readDataSuccess(masive))})
    }
}

export function deleteUser(keyID){
    return (dispatch) => {
         axios.delete(`${urlDataUser}/data/${keyID}.json/`)
         .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
        .then(dispatch(deleteUserSeccess(keyID)))
    }
}

export function addUser(inerDataUser){
    let a;
    return (dispatch) => {axios.post(`${urlDataUser}/data.json`,inerDataUser)
    .then((response)=>{
        if (!response.statusText){
               throw new Error(response.statusText) 
        }return response
    }) 
    .then( (response)=> { a =  {...inerDataUser, keyID: response.data.name} })
    .then( ()=> { dispatch(addUserSeccess(a))      
    }) 
}   
}

// function blockUserSuccess(dataUser){}
export function blockUser(dataUser){
    let flag;
    if (dataUser.block){flag = false}
    else {flag = true}
return (dispatch)=> {//axios.post(`${urlDataUser}/data/${dataUser.keyID}.json/`, {block: flag} )
    let a = {...dataUser, block: flag}   
    dispatch( deleteUser(dataUser.keyID))
    dispatch(addUser(a))
}}

//function makeAdminSucces(dataUser){}
export function makeAdmin(dataUser){
    let flag; 
    dataUser.admin? flag = false : flag = true
    return ((dispatch)=>{
        let a = {...dataUser, admin: flag}   
        dispatch( deleteUser(dataUser.keyID))
        dispatch(addUser(a))
    })
}

export function checkingUser(data){
    let flag = false;
    let user;
    return (dispatch)=>{
        axios.get(`${urlDataUser}/data.json`, {params:{ userName: "vasja"}})
        .then(function (response) {
            if(!response.statusText){
               throw new Error(response.statusText) 
            }
            return response;
          })
          .then(response=>{
             let m =  Object.values(response.data)
             for (const iterator of m) {
                 if(iterator.email === data.email){
                     if(iterator.password === data.password){
                        user = iterator
                        return ;
                     }else { flag = true}
                 }else  { flag = true}
             } if(flag){alert("Sorry, but this email or password is not")}
           }).then ( ()=>{
               if(!!user){dispatch(checkingUserSucses(user))
                }
           })
    }
}

function checkingUserSucses(data){
    return{
        type: LOGIN_USER,
        payload: data
        
    } 
}

export function logOut(){
    return{
        type: LOGOUT_USER,
        
    }
}
