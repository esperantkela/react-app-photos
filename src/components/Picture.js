import  axios  from "axios";
import React, {useState, useEffect} from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from './Loader';

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
                    console.log(res.data)
                    setPicture(res.data)
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
       <React.Fragment>
            <Navbar/>
            <div className="container my-5">
                {
                    picture && picture.user
                    ?
                    <div className="row">
                    <div className="col-6">
                        {console.log(picture.image)}
                        <img className="img-fluid" src={`http://127.0.0.1:8000/storage/pictures/${picture.image}`} alt="img"/>
                    </div>
                    <div className="col-4">
                        <div >
                            <h3>{picture.title}</h3>
                            <p>{picture.description}</p>
                            <h2>Auteur:  <span className="badge bg-secondary">{picture.user.name}</span></h2>
                        </div>
                    </div>
                </div>

                    :
                    <div className="d-flex justify-content-center mt-5">
                           <Loader/>
                    </div>
                 

                }
                
            </div>
        </React.Fragment>
    );
}

export default Picture