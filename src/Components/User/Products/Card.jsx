import React from 'react'
import Cappuccino from "../../../Images/User/Cappuccino.webp";
import "./Card.css";
function Card(props) {
  return (
   
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
       
              <div className="coffee-card-item">
                <div className="row">
                  <div className="col-4">
                    <div
                      className="coffee-card-image"
                      style={{ backgroundImage: `url('${props.data.imageURL || Cappuccino}')` }}
                    ></div>
                  </div>

                  <div
                    className="col-8 text-start"
                    style={{ marginTop: "30px" }}
                  >
                    <div className="coffee-card-item-body"  style={{margin:"1%"}}>
                    <p className="poppins-semibold heading">{props.data.name}</p>
                    <p className="plus-jakarta-sans-Regular content">
                    {props.data.description}
                    </p>
                    </div>
                   

                    <div className="d-flex justify-content-between">
                      <p className="poppins-bold price"> $ {props.data.price} </p>
                      
                      {props.data.isAvailable==0 ? <small className="text-danger" style={{marginRight:"20px"}} >Out Of Stock</small> : <a href={`/ProductDetail/${props.data.id}`}><button class="btn blue">Buy</button>  </a>}
                    
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
   
  )
}

export default Card
