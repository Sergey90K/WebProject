import React  from "react";
import { BsZoomIn , BsTrash, BsUnlockFill, BsShieldCheck,BsFillLockFill,BsShieldX} from "react-icons/bs";
import {connect, useDispatch} from 'react-redux'
import {deleteUser,readData,addUser,blockUser, makeAdmin} from '../Redux/actionsUser'
//import { useEffect } from "react";

function CreatorTable(props){
   const  dispatch = useDispatch();
   let dataUserF =props.dataUserF
    return (
        <div>
            <ul className="list-group">
            {dataUserF.map(dataUser=> {
            return (
                CreateRow(dataUser,dispatch)
            )
            })}
            </ul>
            </div>
    )
}

function CreateRow(dataUser,dispatch){
 return (
     <li className="list-group-item d-flex justify-content-between align-items-center" key={dataUser.keyID}>
     { AddButtonAdmin(dataUser,dispatch)} <span className="badge bg-primary rounded-pill" > {dataUser.keyID} </span> <h4>{dataUser.block}</h4> 
      {dataUser.userName} &nbsp; {dataUser.email}
      <div> {AddButtonInfo(dataUser,dispatch)}  {AddButtonsBlock(dataUser,dispatch)} {AddButtonDelete(dataUser,dispatch)}</div> 
   </li>
    )
}

function AddButtonAdmin(dataUser,dispatch){
    if(!dataUser.admin){return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch (makeAdmin(dataUser))}}> Make admin <BsShieldCheck/></button>)
}else{return(<button type="button" className="btn btn-primary" onClick={()=>{dispatch (makeAdmin(dataUser))}}> Make user <BsShieldX/></button>)}
    
}

function AddButtonsBlock(dataUser,dispatch){
    if (!dataUser.block){return (<button type="button" className="btn btn-warning" onClick={()=>{dispatch(blockUser(dataUser))}}> Block <BsUnlockFill/> </button> )}
    else return (<button type="button" className="btn btn-info" onClick={()=>{dispatch(blockUser(dataUser))}}> Un Block <BsFillLockFill/> </button> )
}

function AddButtonInfo(dataUser,dispatch){
    return(<button type="button" className="btn btn-success"> Info <BsZoomIn/> </button>)
}

function AddButtonDelete(dataUser,dispatch){
    return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch(deleteUser(dataUser.keyID))}}>Delete <BsTrash/></button>)
}

const mapStateToProps = state =>{ return { dataUserF: state.tables.tables } }

const mapDispatchToProps = dispatch => { return{ deleteUser, readData, addUser, blockUser, makeAdmin} }

export default connect(mapStateToProps,mapDispatchToProps)(CreatorTable);
