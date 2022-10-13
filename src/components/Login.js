import React from "react";

class Login extends React.Component{
    constructor(){
        super()
        this.state= {
            email : '',
            password : ''
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
        console.log('connexion')
    }

    render(){
        return(
            <React.Fragment>
                <div className="container w-50">
                    <h1 className="text-center my-5">Connexion</h1>
                <form method="post" onSubmit={this.handleLogin}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Adresse email</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control"/>
                    </div>
                    <button type="submit"  className="btn btn-primary">S'inscrire</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login