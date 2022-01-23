import React ,{useEffect,useState} from "react";
import {useDispatch} from 'react-redux'
import {Routes , Route} from 'react-router-dom'
import Headers from "./Heders/Heders";
import Footers from "./Footers/Footers";
import CreateRegistartionForm from "./Registration/CreateRegistarationForm";
import LoginForm from "./Login/LoginForm";
import AdministaratorPage from "./Admin/AdministartorPage";
import UserPage from "./User/UserPage";
import CreateFormColections from "./User/CreateNewColections";
import HomePage from "./HomePages/HomePage";
import CreateIthem from "./CreateNewIthem/CreateIthem";
import {readData,} from './Redux/actionsUser'
import {readCollections,readAllIthems,readTags,readNameColections} from './Redux/actionsColections'
import IthemPage from "./IthemsPage/IthemsPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";


function App() {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const  dispatch = useDispatch();
  useEffect( () => { dispatch(readData());dispatch(readCollections()); dispatch(readAllIthems()); dispatch(readTags());
     dispatch(readNameColections())}, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div>
    <Headers func = {switchTheme} />
       <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="registration" element= {<CreateRegistartionForm/>} />
      <Route path="login" element= {<LoginForm/>} />
      <Route path="userPage" element= {<UserPage/>} />
      <Route path="administratorPage" element= {<AdministaratorPage/>} />
      <Route path="createColections" element= {<CreateFormColections/>} />
      <Route path="createIthem" element= {<CreateIthem/>}  />
      <Route path="ithemsPage" element= {<IthemPage/>}  />
    </Routes>
    <Footers/>
    </div>
    </ThemeProvider>
  );
}

export default App;
