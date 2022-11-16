import React from "react";
import Navbar from "./Navbar";
import  axios  from 'axios';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            pictures : [],
            search : ''
        }
    }

    componentDidMount(){
        axios.post('http://127.0.0.1:8000/api/pictures')
            .then(res =>{
                this.setState({pictures : res.data})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    handleSearchChange = (e) =>{
        this.setState({search : e.target.value}, ()=>{
            this.getArticles()
            if(this.state.search === ''){
                this.getArticles()
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.getArticles()
    }

    getArticles(){
        let bodyFormData = new FormData();
        bodyFormData.set('search', this.state.search)

        axios.post('http://127.0.0.1:8000/api/pictures', bodyFormData)
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
                    <div className="d-flex justify-content-center mb-5">
                        <form className="form-inline my-2 my-lg-0" method="POST" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" onChange={this.handleSearchChange}  name="search" placeholder="Search pictures here..." type="search"/>
                        </form>
                    </div>
                    <div className="row justify-beetwen">
                        {
                            this.state.pictures.map((picture) =>
                            <div class="card mx-2 my-3" style={{ width : '350px' }} >
                                <img class="card-img-top" src={`http://127.0.0.1:8000/storage/pictures/${picture.image}`} alt=""/>
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