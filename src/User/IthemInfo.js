import React from "react";
import { connect,useDispatch } from "react-redux";
import { BsTrash} from "react-icons/bs";
import {deleteIthem} from '../Redux/actionsColections'

function IthemInfo(props){
    const  dispatch = useDispatch();
   if(! (props.ithems.length === 0 )){
    return(<div className="d-flex gap-2 w-100 justify-content-between"> 
    {props.ithems.map((data)=>{ if(data.collectionsKeyId === props.keyId){ return(<> {CtrateList(data,dispatch)} </>) } })}
    </div>)   
   }else{ return(<div> <h2> Sorry, but no ithems have been created yet. </h2> </div>)}
}

function CtrateList(data,dispatch){
     return( <div > <ul className="list-group list-group-flush" key={data.keyID}>
     {Object.entries(data).map(([key,value])=>{
        return ( <li className="list-group-item list-group-item-success" key={getRandomInt()}>  {key} : {value.toString()}</li> ) }
          )   
      }   </ul> &nbsp;
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" >
      <button type="button" className="btn btn-danger" onClick={()=>{ dispatch(deleteIthem(data.keyID)) }}>Delete Ithem  <BsTrash/> </button>
       </div>
      </div> )
}

function getRandomInt() {
    return Math.floor(Math.random() * 5000);
  }

const  mapStateToProps  = state => {return{ithems: state.colections.ithems}}

export default connect(mapStateToProps,null) (IthemInfo);