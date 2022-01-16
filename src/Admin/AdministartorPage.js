import React from "react";
import CreatorTable from "./CreatorTable";
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'


function AdministaratorPage(props){
    let navigate = useNavigate();

    if (Object.keys(props.dataUser).length === 0 ){return ( <h1> Sorry. You will be directed to the main page.
        {setTimeout(()=>{ navigate("/") }, 1000)}  </h1>) 
        }else {
            return(
                <CreatorTable/>
               )
        }
        
   
}

const mapStateToProps = state =>{ return { dataUser: state.tables.userData } }

export default connect(mapStateToProps, null) (AdministaratorPage)