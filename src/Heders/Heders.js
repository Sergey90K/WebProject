import React from "react";
import {useNavigate} from 'react-router-dom';
import {connect,useDispatch} from 'react-redux'
import {logOut, backAccount} from '../Redux/actionsUser'
import cogoToast from 'cogo-toast';
import { BsGlobe, BsSun , BsFillHouseFill, BsFillPersonCheckFill, BsFillPersonPlusFill, BsFillPersonXFill, BsFillPeopleFill,
   BsFillPersonBadgeFill, BsTropicalStorm} from "react-icons/bs";

function Headers (props) {
  const  dispatch = useDispatch();
  let navigate = useNavigate();
    return (
        <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <button type="button" className="btn btn-outline-light me-2" onClick={()=>{navigate('/')}}> Home <BsFillHouseFill/> </button>
                {ShowButtonMyPage(props.dataUser,navigate)}  
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
            <button type="button" className="btn btn-outline-light me-2" onClick={()=>{alert('The functionality is temporarily unavailable.')}}>
             <BsGlobe/> </button>
             <button type="button" className="btn btn-outline-light me-2" onClick={()=>{  props.func() }}>
             <BsSun/> </button>
             </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" disabled={true} />
            </form>
            <div className="text-end"> {ShowButton(props.dataUser, navigate,dispatch, props.backData )}
            </div>
          </div>
        </div>
      </header>
    )
}

function ShowButton(dataUser,navigate,dispatch, backData){
   if ( dataUser.length === 0 ){
   return(<>
     <button type="button" className="btn btn-outline-light me-2" onClick={()=>{navigate('/login')}}>Login <BsFillPersonCheckFill/> </button>
              <button type="button" className="btn btn-outline-light me-2" onClick={()=>{navigate('registration')}} >Sign-up <BsFillPersonPlusFill/> </button>
   </>)
 }else {
   return(<>   { Object.entries(dataUser)[0][1].userName  } <> </> 
     <button type="button" className="btn btn-outline-light me-2" onClick={()=>{dispatch(logOut())}}>Logout <BsFillPersonXFill/> </button> &nbsp; 
     {ShowButtonBackAccount(dispatch, backData ) } 
   </>)
 }
} 

function ShowButtonAdmin(data,navigate){
  if (Object.entries(data)[0][1].admin){  return( <button type="button" className="btn btn-outline-light me-2" 
  onClick={()=>{ navigate("/administratorPage") }}>Admin Page <BsFillPeopleFill/> </button>)}
}

function ShowButtonMyPage(dataUser,navigate){
  if (Object.keys(dataUser).length === 1){return (<> <button type="button" className="btn btn-outline-light me-2" 
  onClick={()=>{navigate('/UserPage')}}> My page <BsFillPersonBadgeFill/> </button>  {ShowButtonAdmin(dataUser,navigate)} </>)}
}

function ShowButtonBackAccount(dispatch, backData){
  if ( !(Object.keys(backData).length === 0) ){
    return(<button type="button" className="btn btn-outline-light me-2" 
    onClick={()=>{ dispatch(backAccount()); cogoToast.success("You have returned to your account!") }}>  Back to your account <BsTropicalStorm/> </button>)
    }
}

const mapStateToProps = state =>{ return { dataUser: state.tables.userData, backData: state.tables.backAccount } }

export default connect(mapStateToProps,null) (Headers) ;