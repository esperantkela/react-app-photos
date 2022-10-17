import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

class Register extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            password : '',
            password_confirmation : '',
            redirect : false,
            errors : []
        }
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    handlePasswordChange = (e) =>{
        this.setState({
            password: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    handleConfirmPasswordChange = (e) =>{
        this.setState({
            password_confirmation: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    handleRegister = (e) =>{
        e.preventDefault()
        
        let bodyForData = new FormData()

        bodyForData.set('name', this.state.name)
        bodyForData.set('email', this.state.email)
        bodyForData.set('password', this.state.password)
        bodyForData.set('password_confirmation', this.state.password_confirmation)

        axios.post('http://127.0.0.1:8000/api/register', bodyForData)
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect:true})
            })
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors : error.response.data.errors})
                }
            })
    }

    render(){
        if(this.state.redirect){
            return (<Navigate to='/'/>)
        }
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container w-50">
                    <h1 className="text-center my-5">S'inscrire</h1>
                <form method="post" onSubmit={this.handleRegister}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="text"  onChange={this.handleNameChange} className={`form-control ${this.state.errors && this.state.errors.name ? 'is-invalid' : ''}`} aria-describedby="emailHelp"/>
                        { this.state.errors && this.state.errors.name ? <div className="text-danger">{ this.state.errors['name'] }</div> : '' }
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Adresse email</label>
                        <input type="email" onChange={this.handleEmailChange} className={`form-control ${this.state.errors && this.state.errors.email ? 'is-invalid' : ''}`} aria-describedby="emailHelp"/>
                        { this.state.errors && this.state.errors.email ? <div className="text-danger">{ this.state.errors['email'] }</div> : '' }
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" onChange={this.handlePasswordChange} className={`form-control ${this.state.errors && this.state.errors.password ? 'is-invalid' : ''}`}/>
                        { this.state.errors && this.state.errors.password ? <div className="text-danger">{ this.state.errors['password'] }</div> : '' }
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirmation mot de passe</label>
                        <input type="password" onChange={this.handleConfirmPasswordChange} className={`form-control ${this.state.errors && this.state.errors.password_confirmation ? 'is-invalid' : ''}`}/>
                        { this.state.errors && this.state.errors.password_confirmation ? <div className="text-danger">{ this.state.errors['password_confirmation'] }</div> : '' }
                    </div>
                    <button type="submit"  className="btn btn-primary">S'inscrire</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register