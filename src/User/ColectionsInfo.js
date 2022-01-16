import React from "react";
import {useNavigate} from 'react-router-dom'
import { connect, useDispatch } from "react-redux";
import { BsFillGearFill ,BsTrash,BsZoomIn, BsFillPaletteFill} from "react-icons/bs";
import {deleteColections,showColections,} from '../Redux/actionsColections'

function ShowColections(props){ 
    let navigate = useNavigate();
    const  dispatch = useDispatch();
    return (<div>
        <ul className="list-group" key={2}>
       {MapColections(props.colections,props.dataUser.email,dispatch,navigate)}
       <li className="list-group-item list-group-item-success">{AddNewCollections(navigate)}</li>
        </ul> 
    </div>)
}

function MapColections(colections,userEmail,dispatch,navigate){
    return(
        <>
            {colections.map(masive =>{
                if (masive.emailUser === userEmail){
                    return CreateList(masive,dispatch,navigate)
                }
            })}
        </>
    )
}

function CreateList(data,dispatch,navigate){
    return(<><li className="list-group-item list-group-item-success" key={data}>  { data.collectionsName }<></> {ButtonShowInfo(data, dispatch,navigate)} 
     <></> {ButtonEdit()} <></> {ButtonDellete(data,dispatch)} </li>  </> )
}

function ButtonShowInfo(data, dispatch,navigate){
    return(<button type="button" className="btn btn-success" onClick={()=>{  dispatch(showColections(data.keyID));
     setTimeout(()=>{navigate("/colectionsIner")},200) } }>Show info <BsZoomIn/></button>)
}

function ButtonEdit(){
    return(<button type="button" className="btn btn-primary" onClick={()=>{}}>Edit <BsFillGearFill/></button>)
}

function ButtonDellete(data,dispatch){
    return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch(deleteColections(data.keyID))}}> Delete <BsTrash/> </button>)
}

function AddNewCollections(navigate){
    return(<button type="button" className="btn btn-warning" onClick={()=>{ navigate("/createColections")}}> Create new collections <BsFillPaletteFill/> </button>)
}

 function ShowIthem({data}){
    function b(data){
        let a = Object.values(data);
       return(<>
        {   a.map((str)=>{ return(<li className="list-group-item">{str}</li>)})  }
    </>) 
    }
     return (<ul className="list-group"> 
         {b(data)}
     </ul>)
        
 }  

const  mapStateToProps  = state => {return{dataUser: state.tables.userData, colections : state.colections.colections}}

const mapDispatchToProps = dispatch => { return{deleteColections} }

export default connect(mapStateToProps,mapDispatchToProps)(ShowColections)