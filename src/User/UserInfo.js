import React, {useEffect} from "react";
import {connect, useDispatch} from 'react-redux'
import {readData,logOut} from '../Redux/actionsUser'
import {useNavigate} from 'react-router-dom'
import {readCollections} from '../Redux/actionsColections'
import { BsFillPersonXFill,BsFillPeopleFill } from "react-icons/bs";

function ShowUserInfo(props){
    let navigate = useNavigate();
    const  dispatch = useDispatch();
    useEffect( () => { dispatch(readData());dispatch(readCollections()) }, []);
return(<div>
 <ul className="list-group" key={props.dataUser.keyID} >
        { showUser(props.dataUser, dispatch, navigate)}
 </ul>
</div>)
}

function showUser(dataUser, dispatch, navigate){
    let mas;
     for (const iterator of dataUser) {
        mas = iterator;
    }
    return( <> 
            <li className="list-group-item list-group-item-secondary" key={1}> Name: { mas.userName } </li>  
            <li className="list-group-item list-group-item-secondary" key={2}> Email: { mas.email } </li>
            <li className="list-group-item list-group-item-secondary" key={3}> KEY: { mas.keyID } </li>
            <li className="list-group-item list-group-item-secondary" key={4}> Password: { mas.password } </li>
            <li className="list-group-item list-group-item-secondary" key={5}> 
            <button type="button" className="btn btn-danger" onClick={()=>{dispatch(logOut())}}>Logout <BsFillPersonXFill/></button> <></>
            {ChekAdmin(mas,navigate)}
            </li>
            </>
         ) 
  }

  function ChekAdmin(data,navigate){
      if (data.admin){return(<button type="button" className="btn btn-warning" onClick={()=>{ navigate("/administratorPage") }}>Admin Page <BsFillPeopleFill/></button>)}
  }

const mapStateToProps = state =>{ return { dataUser: state.tables.userData } }

//const mapDispatchToProps = dispatch => { return{readData, logOut} }

export default connect(mapStateToProps,null)(ShowUserInfo);