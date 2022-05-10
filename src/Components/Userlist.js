import React,{Component} from "react";

export class Userlist extends Component{
    constructor(){
        super()
        this.state={
            list:null,
        };
    }
    componentDidMount(){
        fetch("http://localhost:3000/user").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result});
            });
        });
        
    }
    render(){
        const headerStyle = {color:'red'}
        return <div>
            <h2 style={headerStyle}>Userlist</h2>
            {
                this.state.list?
                <div>
    
                    {
                        this.state.list.map((user,i)=>
                        <div className="list-wrapper" >
                            <div className="container"> 
                            
                            <table class="table table-striped">
                        
                        <thead class="thead-dark">
                          <tr>
                          <th scope="col"><span>{user.id}</span></th>
                          <th scope="col"><span>{user.username}</span></th>
                          <th scope="col"><span>{user.password}</span></th>
                        </tr>
                        </thead>
                        </table>
                        </div>
                        </div>
                        )
                    }

                </div>
                :<p>pleasewait</p>
    }
    </div>
    }
}
export default Userlist;
                
                
        