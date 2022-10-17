import React from "react";
import axios  from 'axios';
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

class Login extends React.Component{
    constructor(){
        super()
        this.state= {
            email : '',
            password : '',
            redirect : false,
            errors : []
        }
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({redirect:true})
        }
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

    handleLogin = (e) =>{
        e.preventDefault()
        let bodyFormData = new FormData()
        
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)

        axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
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
            return (<Navigate to='/'/>)
        }
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container w-50">
                    <h1 className="text-center my-5">Connexion</h1>
                <form method="post" onSubmit={this.handleLogin}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Adresse email</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control" aria-describedby="emailHelp"/>
                        { this.state.errors && this.state.errors.email ? <div className="text-danger">{ this.state.errors['email'] } </div> : '' }
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control"/>
                        { this.state.errors && this.state.errors.password ? <div className="text-danger">{ this.state.errors['password'] } </div> : '' }
                    </div>
                    { this.state.errors && this.state.errors == 'bad_credentials' ? <div className="alert alert-warning">Vos identifiants de connexion sont incorrects </div> : '' }
                    <button type="submit"  className="btn btn-primary">Se connecter</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login