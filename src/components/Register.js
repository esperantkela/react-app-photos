import React from "react";

class Register extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            password : '',
            confirm_password : ''
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
            confirm_password: e.target.value
        }, ()=>{
            console.log(this.state)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container w-50">
                    <h1 className="text-center my-5">S'inscrire</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="text"  onChange={this.handleNameChange} className="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Adresse email</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirmation mot de passe</label>
                        <input type="password" onChange={this.handleConfirmPasswordChange} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">S'inscrire</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register