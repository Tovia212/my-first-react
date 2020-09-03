import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
    constructor(){
        super()
        this.state = {
            like:0,
            like1:0,
            like2:0,
        };
    };
    clickLike = () => {
        this.setstate({
            likes: this.state.likes +1
        });
    };    

    clickLike1 = () => {
        this.setstate({
            likes1: this.state.likes1 +1
        });
    };
    
    clickLike2 = () => {
        this.setstate({
            likes2: this.state.likes2 +1
        });
    };
    
    render() { 
        return ( 
            <div>
               
                <nav class="navbar navbar-light bg-light">
                   <a class="navbar-brand" >
                      <img src="data:image/jpeg;base64,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" width="50" height="50" alt="" loading="lazy"/>
                      
                   </a>
                </nav>
                <div className="container">
                        <div className="row">

                            <div className="col-4">
                            <div className="card" style={{width:"18rem",}}>
                                    <img src="https://res.cloudinary.com/tovia212/image/upload/v1599036051/unsplash1_mdhyjo.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Black is beautiful</p>
                                        
                                    </div>
                                <button className="btn-info" style={{width:"20%"}} onClick={this.clickLike}>Like</button>    
                                <small>{this.state.like}</small>                                
                                </div>
                            </div>
                            
                            <div className="col-4">
                                <div className="card" style={{width:"18rem",}}>
                                    <img src="https://res.cloudinary.com/tovia212/image/upload/v1598767358/sample.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Love of Nature</p>
                                    </div>
                                    <button className="btn-info" style={{width:"20%"}} onClick={this.clickLike1}>Like</button>    
                                    <small>{this.state.like1}</small>                                    
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{width:"18rem",}}>
                                    <img src="https://res.cloudinary.com/tovia212/image/upload/v1599111553/lukasz-szmigiel-jFCViYFYcus-unsplash_jl9tev.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">🌟</p>
                                    </div>
                                    <button className="btn-info" style={{width:"20%"}} onClick={this.clickLike2}>Like</button>    
                                    <small>{this.state.like2}</small>                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default App;

