import React from "react";
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import { createColections } from "../Redux/actionsColections";
import {useNavigate} from 'react-router-dom';

function CreateFormColections(props) {
  let user;
  const  dispatch = useDispatch();
  let navigate = useNavigate();
  for (const iterator of props.dataUser) {
    user = iterator
  }

  const {
      register,
      formState:{ errors, isValid },
      handleSubmit,
      reset,
  } = useForm({
      mode:"onBlur"
  })

  const onSubmit = (data) =>{
     //console.log( Array.from(data))
      let a = {email : user.email }
      let c= {timeOfCreation : Date.now()}  
      let b = Object.assign(data,a,c)
      dispatch(createColections(b))
      setTimeout(()=>{navigate("/userPage")},500)
      reset()
  }
    return(
      <div className="container" align="center" >
        <h1>Create new Collections </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-9" >
        <label >  <h4 style={ {color:"#004dc9"}}> Collections name </h4>
        <input type="text" className="form-control"  {...register('collectionsName',{required: " Input colections name" ,
         minLength:{value:4 , message :"The collections name cannot be less than 4 characters"},
          maxLength: {value:20, message: "Collections name cannot be greater than 20 characters"} })}/> 
        </label>
              <div style={ {color:"red"} }>
                {errors?.collectionsName && <p>{errors?.collectionsName?.message || "Error!"}</p>}
              </div>
        </div>
        <div className="col-9" >
        <label >  <h5 style={ {color:"#004dc9"}}> Ithem 1 </h5>
        <input type="text" className="form-control"  {...register('ithem1',{required: " Input ithem name" ,
         minLength:{value:4 , message :"The ithem name cannot be less than 4 characters"},
          maxLength: {value:20, message: "Ithem name cannot be greater than 20 characters"} })}/> 
        </label>
              <div style={ {color:"red"} }>
                {errors?.ithem1 && <p>{errors?.ithem1?.message || "Error!"}</p>}
              </div>
        </div>
        <div className="col-9" >
        <label >  <h5 style={ {color:"#004dc9"}}> Ithem 2 </h5>
        <input type="text" className="form-control"  {...register('ithem2',{required: " Input ithem name" ,
         minLength:{value:4 , message :"The ithem name cannot be less than 4 characters"},
          maxLength: {value:20, message: "Ithem name cannot be greater than 20 characters"} })}/> 
        </label>
              <div style={ {color:"red"} }>
                {errors?.ithem2 && <p>{errors?.ithem2?.message || "Error!"}</p>}
              </div>
        </div>
        <div className="col-9" >
        <label >  <h5 style={ {color:"#004dc9"}}> Ithem 3 </h5>
        <input type="text" className="form-control"  {...register('ithem3',{required: " Input ithem name" ,
         minLength:{value:4 , message :"The ithem name cannot be less than 4 characters"},
          maxLength: {value:20, message: "Ithem name cannot be greater than 20 characters"} })}/> 
        </label>
              <div style={ {color:"red"} }>
                {errors?.ithem3 && <p>{errors?.ithem3?.message || "Error!"}</p>}
              </div>
        </div>
        <input type='submit' disabled={!isValid} value={'Create'}></input> <></>
        <button type="button" className="btn btn-primary" onClick={()=>{navigate("/userPage")}}>Cancel</button>
        </form>
        
      </div>
        )
}

const mapStateToProps = state =>{ return { dataUser: state.tables.userData } }

//const mapDispatchToProps = dispatch => { return{ deleteUser, readData, addUser, blockUser, makeAdmin} }

export default connect(mapStateToProps, null)(CreateFormColections);