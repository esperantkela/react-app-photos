import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            token : null
        }
    }

 
    render(){
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">LaraReact App</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                           {
                                localStorage.getItem('token')
                                ?
                                
                                <>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Accueil</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/login">AJouter une Photo</Link>
                                    </li>
                                    <button className="btn btn-danger">Déconnexion</button>
                                </>
                                    
                                :
                                <>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Accueil</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/login">Connexion</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link active" to="/register">Inscription</Link>
                                </li> 
                            </>
                                
                           }
                        </ul>
                        </div>
                    </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default Navbar