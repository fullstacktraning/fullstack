import { Component } from "react";
import TestChild from "./TestChild.jsx"
class TestParent extends Component{
    constructor(){
        super();
        this.state = {
            name : "Hello"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Hello"
            })    
        },1000);
    }
    render(){
        console.log("TestParent");
        return(
            <>
                <TestChild name={this.state.name}></TestChild>
            </>
        )
    }
}

export default TestParent;