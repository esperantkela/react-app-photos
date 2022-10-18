import React from "react";
import Navbar from "./Navbar";
import  axios  from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            pictures : []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/pictures')
            .then(res =>{
                this.setState({pictures : res.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        return(
            
            <>
                <Navbar/>
                <div className="container my-5">
                    <div className="row justify-beetwen">
                        {
                            this.state.pictures.map((picture) =>
                            <div class="card mx-2 my-3" style={{ width : '350px' }} >
                                <img class="card-img-top" src={`http://127.0.0.1:8000/storage/pictures/${picture.image}`}/>
                                <div class="card-body">
                                    <h5 class="card-title">{picture.title}</h5>
                                    <p class="card-text">{picture.description}</p>
                                    <Link to={`picture/${picture.id}`} class="btn btn-primary">En savoir plus</Link>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </>  
        );
    }
}

export default Home