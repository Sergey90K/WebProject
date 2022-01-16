import React from "react";
import {useNavigate} from 'react-router-dom'
import {connect,useDispatch} from 'react-redux'
import  ShowUserInfo from './UserInfo'
import ShowColections from './ColectionsInfo'
import {logOut} from '../Redux/actionsUser'

function UserPage(props){
  let navigate = useNavigate();
  const  dispatch = useDispatch();
  if (Object.keys(props.dataUser).length === 0 ){return ( <h1> Sorry. You will be directed to the main page.
      {setTimeout(()=>{ navigate("/") }, 1000)}  </h1>) 
      }else if(Object.entries(props.dataUser)[0][1].block){
        return ( <> <h5> { "Sorry, you have been blocked by the administrator."} </h5> 
          {setTimeout(()=>{dispatch(logOut()); navigate("/") }, 2000)} </>)
  }else { return( 
    <div className="row"> 
      <div className="col-6 col-md-4 "> <h4>Ueser Informations</h4>  <ShowUserInfo />   </div>
      <div className="col-md-8">  <h4>Colections Informations</h4>  <ShowColections/> </div>
    </div>
      )}
}

const mapStateToProps = state =>{ return { dataUser: state.tables.userData } }

//const mapDispatchToProps = dispatch => { return{ deleteUser, readData, addUser, blockUser, makeAdmin} }

export default connect(mapStateToProps, null)(UserPage)