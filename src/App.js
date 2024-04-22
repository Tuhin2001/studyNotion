import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import {Routes ,Route} from "react-router-dom";
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen bg-richblack-900">
      <Navbar  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>


      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path="/signup" element ={<Signup setLoggedIn={setLoggedIn}/>}/>
        <Route path="/dashboard" element ={<Dashboard/>}/>
      </Routes>



    </div>
  );
}

export default App;
