import  axios  from "axios";
import React, {useState, useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";

const  Picture  = ()=>
{
    const [redirect, setRedirect] = useState(false);
    const [picture, setPicture] = useState({});
    const params = useParams();

    useEffect(()=>{
        

        if(localStorage.getItem('token')){
            let id = params.id
            let headers =  {
                headers : {
                    'API-TOKEN' : localStorage.getItem('token')
                }
            }

            axios.get(`http://127.0.0.1:8000/api/pictures/${id}`, headers)
                .then(res =>{
                    setPicture({
                        picture : res.data
                    })
                })
                .catch(error =>{
                    console.log(error)
                })
        }else{
            setRedirect({
                redirect : true
            })
        }
      

    },[] )

    if(redirect){
        return (<Navigate to='/'/>)
    }

    return(
       
        <h1>Photo</h1>
    );
}

export default Picture