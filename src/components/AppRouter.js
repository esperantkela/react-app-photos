import React from "react";
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { Routes, Route } from "react-router-dom";

class AppRouter extends React.Component{
    render(){
        return(
            <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
      </Routes>
        );
    }
}

export default AppRouter