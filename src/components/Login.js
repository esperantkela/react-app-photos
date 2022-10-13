import React from "react";

class Login extends React.Component{
    constructor(){
        super()
        this.state= {}
    }

    render(){
        return(
            <React.Fragment>
                <div class="container w-50 my-5">
                    <h1 class="text-center">Connexion</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Se connecter</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login