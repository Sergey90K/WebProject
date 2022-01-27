import React from "react";
import { connect } from "react-redux";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

 function CollectionsIner(props){
     return (<div className="container"> 
     <GetData colections = {props.colections} keyID={props.keyID} /> 
     </div>)
 }
 
 function GetData(props){
        let objectColection = props.colections
        const keyCollections = props.keyID
    return (<ul className="list-group"  key={Date.now()}> {CreateTable(objectColection, keyCollections )} </ul>)
}

function CreateTable(objectColection, keyCollections){
return(<>
    {  objectColection.map(data=>{
        if(data.keyID === keyCollections){
          return (<> {createLi(data)}  </>)
    }
    } )
    }</> )
    }

 function createLi(data){
    const petList = Object.entries(data).map(([key,value])=>{ let markdown = value;
        if(key === "Description"){
            return ( <li className="list-group-item list-group-item-success" key={getRandomInt()}> 
            {key} :  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />   </li>    );
        }else{
            return ( <li className="list-group-item list-group-item-success" key={getRandomInt()}> 
            {key} : {value.toString()}   </li>    );
        }
      })
      return(<> {petList} </> )
 }
 
 function getRandomInt() {
    return Math.floor(Math.random() * 5000);
  }

 const  mapStateToProps  = state => {return{keyID: state.colections.keyID, colections: state.colections.colections}}

export default connect(mapStateToProps,null)(CollectionsIner)