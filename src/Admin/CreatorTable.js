import React  from "react";
import { BsZoomIn , BsTrash, BsUnlockFill, BsShieldCheck,BsFillLockFill,BsShieldX} from "react-icons/bs";
import {connect, useDispatch} from 'react-redux'
import {deleteUser,readData,addUser,blockUser, makeAdmin, logInAsUser} from '../Redux/actionsUser'
import cogoToast from 'cogo-toast';

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
    if(!dataUser.admin){return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch (makeAdmin(dataUser)); 
    cogoToast.success("Success!") }}> Make admin <BsShieldCheck/></button>)
}else{return(<button type="button" className="btn btn-primary" onClick={()=>{dispatch (makeAdmin(dataUser)); 
cogoToast.success("Success!") }}> Make user <BsShieldX/></button>)} 
}

function AddButtonsBlock(dataUser,dispatch){
    if (!dataUser.block){return (<button type="button" className="btn btn-warning" onClick={()=>{dispatch(blockUser(dataUser));
    cogoToast.warn("The user has been blocked!") }}> Block <BsUnlockFill/> </button> )}
    else return (<button type="button" className="btn btn-info" onClick={()=>{dispatch(blockUser(dataUser));
    cogoToast.warn("The user has been unblocked!") }}> Un Block <BsFillLockFill/> </button> )
}

function AddButtonInfo(dataUser,dispatch){
    return(<button type="button" className="btn btn-success" onClick={()=>{ dispatch(logInAsUser(dataUser));
   cogoToast.info("You are logged in as a different user.")  }}> Log in as user  <BsZoomIn/> </button>)
}

function AddButtonDelete(dataUser,dispatch){
    return(<button type="button" className="btn btn-danger" onClick={()=>{dispatch(deleteUser(dataUser.keyID)); 
    cogoToast.error("The user has been deleted!") }}>Delete <BsTrash/></button>)
}

const mapStateToProps = state =>{ return { dataUserF: state.tables.tables } }

const mapDispatchToProps = dispatch => { return{ deleteUser, readData, addUser, blockUser, makeAdmin} }

export default connect(mapStateToProps,mapDispatchToProps)(CreatorTable);
