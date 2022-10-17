import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            
            <>
            <Navbar/>
            <h1>Home page</h1>
            </>  
        );
    }
}

export default Home