import React from 'react';
import './App.css';
import Main from './componenets/main/Main';
import SideBar from './componenets/Sidebar/Sidebar';
import Widjets from './componenets/widjets/Widjets';

function App() {
  return (
    <div className="app">
     <SideBar/>
     <Main/>
     <Widjets/>
    </div>
  );
}

export default App;
