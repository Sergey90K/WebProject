import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BsHandThumbsUp, BsHandThumbsDown} from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
import {liked,dislike} from '../Redux/actionsColections'
import Coment from "./Coment";

function IthemPage(){ 
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const ithemsKey = useSelector((state)=>state.colections.keyIdIthems);
    const ithems = useSelector(state => state.colections.ithems);
    const user = useSelector(state => state.tables.userData);
    const like = useSelector(state => state.colections.like);
    if (!(ithemsKey.length ===0)){
        let ithemsFiltred = ithems.filter(ithem => ithem.keyID === ithemsKey)
        let likeFiltred = like.filter(like => like.ithemKeyID === ithemsKey)
        return(<div className="container">
        <h2 className="funny-title section-title"> Ithem PAGE </h2>
        <div className="row justify-content-md-center">
        <div className="col justify-content-md-center">   
        <div className="header-h1"><h3>ithem informations.</h3> </div> &nbsp;
            {ShowIthem(ithemsFiltred, user,dispatch,likeFiltred)}
        </div>   
         </div> &nbsp;
         <div className="row justify-content-md-center">
         <div className="header-h1"><h3>ithem coment.</h3> </div>
        <div className="col"> 
              <Coment/>
            </div>
        </div>
    </div>)
    }else{return(<>{ navigate("/")}</>) }
}

function ShowIthem(ithem, user,dispatch,likeFiltred){
    return ithem.map(data =>{
        return(
        <div className="container">
        <div className="row justify-content-md-center">
        <div className="col-6">
        <div class="two"><h1>{data.name} <br/> {data.tegs}  </h1>  <br/>  
        <span className="badge bg-primary rounded-pill"> LIKE {likeFiltred.length}</span>
           </div>  &nbsp;
          {ButtonLike(data,user,dispatch,likeFiltred)}
        </div>
         </div>
        </div>
        )
    })
}

function ButtonLike(ithem, user,dispatch,like){
    if(!(user.length === 0)){
        let a = like.filter(like => like.userKeyID === user[0].keyID ) 
        if(!(a.length === 0)){
            return(
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-danger"  onClick={()=>{dispatch(dislike(like[0].keyID))}}>  <BsHandThumbsDown/></button>
            </div>
            )
        }else{
            return(<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-success"  onClick={()=>{dispatch(liked(addLike(ithem, user)))  }}> <BsHandThumbsUp/></button>
            </div>
                  )   
        }            
    }else{return(<> {} </>)}
}

function addLike(ithem, user){
   let rez = Object.assign({ithemKeyID:ithem.keyID}, {userKeyID: user[0].keyID})
   return rez;
}

export default IthemPage;