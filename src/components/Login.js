import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props)

    }

    email = (e) =>{
        console.log('email change')
    }
    render(){
        return (
            <React.Fragment>
               <form method="post">
                    <input type="email" placeholder="Votre email" onChange={this.email} />
                    <input type="password" placeholder="Votre mot de passe"/>
                    <button type="button">Me connecter</button>
               </form>
            </React.Fragment>
        );
    }
}

export default Login