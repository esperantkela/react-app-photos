import React from "react";
import { useParams } from "react-router-dom";

const  Picture  = ()=>
{
    const params = useParams();
    console.log(params)
    return(
        <h1>Photo</h1>
    );
}

export default Picture