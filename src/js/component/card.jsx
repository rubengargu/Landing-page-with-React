import React from "react";
import Cats from "../../img/gatos.jpg"


const Card =() =>{
    return(

<div className=" col-md-3  border-solid " >
<div className="card-text-center">
  <img src={Cats} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="bg-light w-100 border-solid">
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    </div>

    
    
    )
    }
 


    


export default Card