import React from "react";
import {Routes , Route} from 'react-router-dom'
import Headers from "./Heders/Heders";
import Footers from "./Footers/Footers";
import CreateRegistartionForm from "./Registration/CreateRegistarationForm";
import LoginForm from "./Login/LoginForm";
import AdministaratorPage from "./Admin/AdministartorPage";
import UserPage from "./User/UserPage";
import CreateFormColections from "./User/CreateNewColections";
import CollectionsIner from "./User/CollectionsIner";
import HomePage from "./HomePages/HomePage";


function App() {
  return (
    <div>
    <Headers/>
       <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="registration" element= {<CreateRegistartionForm/>} />
      <Route path="login" element= {<LoginForm/>} />
      <Route path="userPage" element= {<UserPage/>} />
      <Route path="administratorPage" element= {<AdministaratorPage/>} />CreateFormColections
      <Route path="createColections" element= {<CreateFormColections/>} />
      <Route path="colectionsIner" element= {<CollectionsIner/>} />
    </Routes>
    <Footers/>
    </div>
  );
}

export default App;
