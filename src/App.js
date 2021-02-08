import React from 'react';
import './App.css';
import './style.css'
import TopNavbar from './TopNavbar';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import GlobalProvider from './GlobalProvider';
import {TopNavbarContextProvider} from './TopNavbarContext';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  const dataSideBar = [
    {
        id:1, name:'Books',submenu:'Add Book', state:'active'
    },
    {
        id:2, name:'Movies', submenu:'Add Movie', state:'inactive'
    },
    {
        id:3, name:'Sports', submenu:'Add Sport',state:'inactive'
    }

]
const dataTopNavBar = [
  {
    id:1, colorname:'blue', state:'',color:'#4360b5'
  },
  {
    id:2, colorname:'red', state:'',color:'#cf1212'
  },
  {
    id:3, colorname:'green', state:'',color:'#199109'
  }

]
  return (
    <Router>
      <GlobalProvider>
        <TopNavbarContextProvider>
        <div className="App">
          <div className="wrapper">
            <TopNavbar dataTopNavBar={dataTopNavBar} dataSideBar={dataSideBar}>
            <SideBar/>
            </TopNavbar>
            <MainContainer/>
          </div>
        </div>
        </TopNavbarContextProvider>
      </GlobalProvider>
    </Router>
  );
}

export default App;
