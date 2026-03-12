import { Component, PureComponent } from "react";
class TestChild extends PureComponent{
    
    render(){
        console.log("TestChild");
        return(
            <>
                <h1>{this.props.name}</h1>
            </>
        )
    }
}
export default TestChild;