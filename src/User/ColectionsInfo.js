import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { connect, useDispatch } from "react-redux";
import { BsFillGearFill ,BsTrash,BsZoomIn, BsFillPaletteFill, BsVectorPen,BsXLg} from "react-icons/bs";
import {deleteColections,showColections,setTrueFlag,setFalseFlag,setKeyIthem} from '../Redux/actionsColections'
import CollectionsIner from "./CollectionsIner";
import IthemInfo from "./IthemInfo";
import cogoToast from 'cogo-toast';

function ShowColections(props){ 
    const [flagIthems,changeFlag ] = useState(false)
    const [keyId,changeKey ] = useState(false)
    let flagForm = props.flagForm
    let navigate = useNavigate();
    const  dispatch = useDispatch();  
    if(!( props.colections.length ===0 )){
        return (<div>
            <ul className="list-group" key={Date.now()}>
           {MapColections(props.colections,props.dataUser[0].email,dispatch,navigate, flagForm, changeFlag,flagIthems,keyId,changeKey)}
           &nbsp;
           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" >{AddNewCollections(navigate)}</div>
               </ul> 
            <div  style={{display: 'flex', justifyContent: 'center', margin: '1rem'}}>  
             {ShowInfo(flagForm,dispatch)} </div>
             <div  style={{display: 'flex', justifyContent: 'center', margin: '1rem'}}>  
             {ShowIthems(flagIthems,changeFlag,keyId)} </div>
        </div>) 
    }else{return(
          <div> <h2> Sorry, but no collections have been created yet. </h2> 
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" >   {AddNewCollections(navigate)}  </div>  
          </div>)}    
}

function MapColections(colections,userEmail,dispatch,navigate,flag,changeFlag, flagIthems,keyId,changeKey){
    return(
        <>
            {colections.map(masive =>{     
                if ( masive.email === userEmail){
                    return CreateList(masive,dispatch,navigate, flag, changeFlag, flagIthems,keyId,changeKey)
                }
            })}
        </>
    )
}

function CreateList(data,dispatch,navigate,flag, changeFlag, flagIthems,keyId,changeKey){
    return(<><li className="list-group-item list-group-item-success" key={data.keyID}>  { data.collectionsName }<></> {ButtonShowInfo(data,dispatch,flag)} 
     <></> {ButtonCreateIthem(dispatch,data,navigate)} <></> {ButtonShowIthems(changeFlag,flagIthems,data,keyId,changeKey)} <></> {ButtonDellete(data,dispatch)} </li>  </> )
}

function ButtonShowInfo(data, dispatch, flag){
   if(!flag){ return(<button type="button" className="btn btn-success" onClick={()=>{ dispatch(showColections(data.keyID));
    dispatch( setTrueFlag(data) ) } }>Show info <BsZoomIn/></button>)
    }else {
        return(<button type="button" className="btn btn-success" onClick={()=>{ dispatch(setFalseFlag())}  } > Close info <BsZoomIn/></button>)
    }  
}

function ButtonShowIthems(changeFlag,flagIthems,data,keyId,changeKey){
    if (!flagIthems){
        return(<button type="button" className="btn btn-primary" onClick={()=>{ changeKey( keyId = data.keyID) ; 
            changeFlag(flagIthems= true) }}> Show Ithems <BsFillGearFill/></button>)
    }else{
        return(<button type="button" className="btn btn-primary" onClick={()=>{changeKey( keyId = false);
            changeFlag(flagIthems = false ) }}> Close Ithems <BsFillGearFill/></button>)
    }
}

function ButtonDellete(data,dispatch,){
    return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch(deleteColections(data.keyID));  cogoToast.error("Deleted!") }}> Delete <BsTrash/> </button>)
}

function AddNewCollections(navigate){
    return(<button type="button" className="btn btn-warning" onClick={()=>{  navigate("/createColections")}}> Create new collections <BsFillPaletteFill/> </button>)
}

function ButtonCreateIthem(dispatch,dataColections,navigate){
 return(<button type="button" className="btn btn-info" onClick={()=>{dispatch(setKeyIthem( dataColections.keyID) );
  navigate('/createIthem')  }}>Create new Ithem  <BsVectorPen/> </button>)   
}
 
 function ShowInfo (flag,dispatch){
     if (flag){  
        return(<div className="conteiner"> 
        <div className="header-h1"><h3>CHOISE INFORMATIONS.</h3> </div>
        <CollectionsIner/> &nbsp;
        <div className ="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-danger" onClick={()=>{dispatch(setFalseFlag())}}>Close info <BsXLg/></button>
        </div>
         </div>) 
     } else{return(<></>)}
 }

 function ShowIthems (flag,changeFlag, keyId){
    if (flag){  
       return(<div className="container"> 
       <div className="header-h1"><h3>ITHEMS INFORMATIONS.</h3> </div>
       <IthemInfo keyId = {keyId}/>
       <div className="row"><div className="col" > &nbsp;
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" >
       <button type="button" className="btn btn-danger" onClick={()=>{changeFlag( flag = false)}}>Close info <BsXLg/></button>
       </div>  </div> </div>
        </div>) 
    } else{return(<></>)}
}
 
const  mapStateToProps  = state => {return{dataUser: state.tables.userData, colections : state.colections.colections ,
     flagForm: state.colections.flag, collectionsData: state.colections.collectionsData  }}

//const mapDispatchToProps = dispatch => { return{deleteColections} }

export default connect(mapStateToProps,null)(ShowColections)