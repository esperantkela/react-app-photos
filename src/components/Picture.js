import React from "react";
import  axios  from 'axios';

class Picture extends React.Component
{
    constructor(props){
        super();

        this.state = {
           redirect : false,
        }
    }
  componentDidMount() {
     if(localStorage.getItem('token')){
        let id = this.props.match.params.id
        let headers = {
            headers : {
                'API-TOKEN' : localStorage.getItem('token')
            }
        }

        axios.get(`http://127.0.0.1:8000/api/picture/${id}`, headers)
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error.response)
            })
     }
    }

    render(){
        return (
            <p>Photo</p>
        );
    }
}

export default Picture