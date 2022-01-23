import React from "react";
import { useDispatch, useSelector } from 'react-redux'

function IthemPage(){
    const ithemsKey = useSelector((state)=>state.colections.keyIdIthems)
    console.log(ithemsKey)
    return(<h1> Ithems page</h1>)
}

export default IthemPage;