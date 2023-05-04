import React from "react";
import Cats from "../../img/gatos.jpg"


const Card =() =>{
    return(

<div className="card col-2 sm-12 m-2 text-center" >
  <img src={Cats} className="card-img-top m-1" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    )
}

export default Card