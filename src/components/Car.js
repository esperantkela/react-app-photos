import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand : 'Ford',
            model : 'mustand',
            color : 'red',
            year : 1964
        }
    }

    ChangeColor = () =>{
        this.setState({
            color : 'Blue'
        })
    }
    
    componentDidMount(){
        this.setState({ color: 'green' })
    }
    render(){
       return (
        <div>
            <h2>My { this.props.brand } </h2>
            <p>it's a {this.state.color} {this.state.model} from {this.props.year} </p>
            <button type="button" onClick={this.ChangeColor}>Change couleur</button>
        </div>
       );
    }
}

export default Car