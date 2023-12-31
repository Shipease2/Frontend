import 'devextreme/dist/css/dx.light.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/common/sidebar/Sidebar";
import Header from "./Component/common/header/Header";
import "./App.css";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import Orders from './Component/Pages/Dashboard/DashboardTabs/Orders';

function App() {
  return (
     <Router>
       <div className="container p-0 m-0" style={{ display: "flex" }}>
         <div>
           <Sidebar />
         </div>
         <div className="rightContainer">
           <div>
             <Header />
           </div>
           <Routes>            
             <Route path="/Orders" element={<Orders/>} />
             <Route path="/" element={<Dashboard/>} />
           </Routes>
         </div>
       </div>
     </Router>
  );
}

export default App;
