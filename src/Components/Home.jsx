import React from 'react'
import { ring1, ring2, ring3, ring4, ring5, ring7 } from "../assets/images/index"

// import "./Components/Header"

function Home() {
  return (
    <div>
        <div className="home">
        <img src={ring7} />
    </div>
  
      
    <div>
        <button className="button"><a href="/products-btn/product.html">Shop now</a></button>
    </div>


    <div className="small-container">
        <div className="row">
            <div class="col-2">
                <div className="offer">
                    <img src={ring1} className="offer-im" />
                    <img src={ring2} className="offer-im" />
                    <img src={ring3} className="offer-im" />
                    <img src={ring4} className="offer-im" />
                    <img src={ring5} className="offer-im" />
                

                </div>

            </div>
        </div>
     </div>
    </div>
  )
}

export default Home