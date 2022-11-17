
import React, { useState } from 'react';
import Data from './Data.js';
import './Card.css';
export default function HomeCard() {
  const [items, setItems] = useState(Data);
  const filterItem=(cat)=>{
    const updateItem=Data.filter((cur)=>{
      return cat===cur.city
    })
    setItems(updateItem);
  }
    return (
    <>
      {
        items.map((ele,index) => {
          const{ id,imgg, category, price, city,desc } = ele;
          return ( 
            <div className="card" key={index}>
              <div className='img'>
                <img src={imgg} style={{ width: "226px"} } alt='hi'/>
              </div>
              <div className="content">
                <p>
                  <div className='dollar'>
                  <i className='material-icons'>attach_money </i></div>
                  <span className='bold'>{price}</span>
                  <span className='mon'>/month</span>
                </p>
                <h5>{category} </h5>
                <h6> {city}</h6>
               <hr></hr>
                <p>{desc}</p>
               {/* < span><a id='rent' href="#" className="btn btn-primary">Rent</a></span> */}
              </div>
            </div>
          )
        })
      }
    </>
  )
}
