import React from "react";
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

 function CollectionsIner(props){
    let navigate = useNavigate();
     return (<div className="container"> 
     <GetData colections = {props.colections} keyID={props.keyID} /> 
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
     <button  type="button" className="btn btn-primary"  onClick={()=>{navigate("/userPage")}}>Main Page</button>
     </div>
     </div>)
 }
 
 function GetData(props){
        let objectColection = props.colections
        const keyCollections = props.keyID
    return (<ul className="list-group"  key={1}> {CreateTable(objectColection, keyCollections )} </ul>)
}

function CreateTable(objectColection, keyCollections){
return(<>
    {
        objectColection.map(data=>{
        if(data.keyID === keyCollections){
          return (<> {createLi(data)}  </>)
        }
    } )
    }</> )
    }

 function createLi(data){
    const petList = Object.entries(data).map(([key,value])=>{
        return ( <li className="list-group-item list-group-item-success" key={key}>{key} : {value.toString()}</li>  );
      })
      return(<ul>{petList}</ul>)
 }
 
 const  mapStateToProps  = state => {return{keyID: state.colections.keyID, colections: state.colections.colections}}

export default connect(mapStateToProps,null)(CollectionsIner)