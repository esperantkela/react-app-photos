import React from "react";
import Navbar from "./Navbar";
import axios  from 'axios';
import { Navigate } from 'react-router-dom';

class PostPicture extends React.Component{
    constructor(){
        super()
        this.state = {
            title : '',
            description : '',
            image : '',
            redirect : false,
            errors: ''
        }
    }

    handleTitleChange = (e) =>{
        this.setState({
            title: e.target.value
        }, ()=>{
            console.log(this.state) 
        })
    }

    handleDescriptionChange = (e) =>{
        this.setState({
            description: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    handleImageChange = (e) =>{
        this.setState({
            image: e.target.files[0]
        }, ()=>{
            console.log(this.state)
        })
    }

    handleSubmitPicture = (e) =>{
        e.preventDefault()
        let bodyFormData = new FormData()
        
        bodyFormData.set('title', this.state.title)
        bodyFormData.set('description', this.state.description)
        bodyFormData.set('image', this.state.image)

        axios.post('http://127.0.0.1:8000/api/pictures', bodyFormData)
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect:true})
            })
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors : error.response.data.errors}, ()=>{
                        console.log(this.state)
                    })
                }
            })
    }

    render(){
        if(this.state.redirect){
            return (<Navigate to="/"/>);
        }
        return (
            <>
                <Navbar/>
                <div className="container w-50">
                    <h1 className="text-center my-5">Ajouter une nouvelle photo</h1>
                    <form method="post" onSubmit={this.handleSubmitPicture} encType="multipart/form-data">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Titre</label>
                            <input type="text" onChange={this.handleTitleChange} className={`form-control ${this.state.errors && this.state.errors.title ? 'is-invalid' : ''}`} aria-describedby="emailHelp"/>
                            { this.state.errors && this.state.errors.title ? <div className="text-danger">{ this.state.errors['title'] } </div> : '' }
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Description</label>
                            <textarea onChange={this.handleDescriptionChange} class={`form-control ${this.state.errors && this.state.errors.descrption ? 'is-invalid' : ''}`} id="exampleFormControlTextarea1" rows="3"></textarea>
                            { this.state.errors && this.state.errors.description ? <div className="text-danger">{ this.state.errors['description'] } </div> : '' }
                        </div>

                        <div className="form-group mb-3">
                            <label for="exampleFormControlFile1">Image</label> <br/>
                            <input  onChange={this.handleImageChange}t type="file" className={`form-control ${this.state.errors && this.state.errors.image ? 'is-invalid' : ''}`} id="exampleFormControlFile1"/>
                            { this.state.errors && this.state.errors.image ? <div className="text-danger">{ this.state.errors['image'] } </div> : '' }
                        </div>

                        <button type="submit"  className="btn btn-primary">Ajouter</button>
                    </form>
                </div>
            </>
        );
    }
}

export default PostPicture