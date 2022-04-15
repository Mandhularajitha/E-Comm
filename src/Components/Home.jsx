import React from 'react'
import { ring1, ring2, ring3, ring4, ring5, ring7 } from "../assets/images/index"
import { Link } from 'react-router-dom';
import {Header} from './Header/Header';
import {useNavigate} from "react-router-dom";




function Home() {

    const navigate = useNavigate();

  return (
      <>  
      <Header/>  
      <div>
    
        <div className="home">
        <img src={ring7} />
    </div>
  
     <div> 
         <button className="button1"><Link to="/Product"> Shop now</Link></button>
    </div>

    <Link to='/cart' className="add-cart-btn btn" > 
        <span className="badge-wishlist">2</span>
    </Link>


    <div className="small-container">
        <div className="row">
            <div className="col-2">
                <div className="offer">

                    <img src={ring1} className="offer-im" onClick={()=>navigate("/product")}/>
                    <img src={ring2} className="offer-im" onClick={()=>navigate("/product")}/>
                    <img src={ring3} className="offer-im" onClick={()=>navigate("/product")}/>
                    <img src={ring4} className="offer-im" onClick={()=>navigate("/product")}/>
                    <img src={ring5} className="offer-im" onClick={()=>navigate("/product")}/>

                

                </div>

            </div>
        </div>
     </div>
    </div>
    </>

  )
}

export {Home};