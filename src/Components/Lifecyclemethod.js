import React,{Component} from "react";

export class Lifecyclemethod extends Component{
    constructor(){
        super();
        console.log("++hello constructor++")
    }
    componentDidMount(){
        console.log("++component didmount++")
    }
    componentDidUpdate(){
        console.log("++Didupdate++")
    }
  
    render(){
        
        console.log("++render method++")
        return(
           <div><h1>Lifecyclemethod</h1></div>
        );
        
    }
}
export default Lifecyclemethod;