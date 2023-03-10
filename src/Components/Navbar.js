import React ,{ useState }from 'react'
import './nav.css'
import Data from './Data.js';
import './Card.css';
export default function Navbar() {
  const [items, setItems] = useState(Data);
  const Myarray={
     Price:['2000','3000','4000','8000'],
    Location:['NewYork','Boston','San Francisco'],
    BHK:[1BHK','2BHK','3BHK','4BHK']
  }

  const [price,setPrice]=useState('');
  const [loc,setLoc]=useState('');
  const [bhk,setBhk]=useState('');
 
  const filterItem=(var1,var2,var3)=>{
    
    const updateItem=Data.filter((cur)=>{
     
      return ( 
        (var1==='' || var1==='Price' ? 1:var1===cur.price) && (var2==='' || var2==='Location' ? 1:var2===cur.city) && (var3==='' || var3==='BHK'? 1:var3===cur.desc))
    })
    setItems(updateItem);
  }
  return (
    <div>
      <div className='Ha'>
      <h1 className='heading'>Search property to Rent</h1>
    <hr></hr>
    </div>
    <div className='Main-Container'>
    <div className='filter'>
          <select className='sel' value={price} onChange={e=>setPrice(e.target.value)}>
          <option value={''}>Price</option>
           { 
               Myarray.Price.map((data,index)=>{
                return(<option key={index}>{data}</option>)
               })
           }
          </select>
          <select className='sel' value={loc} onChange={e=>setLoc(e.target.value)}>
          <option value={''}>Location</option>
           { 
               Myarray.Location.map((data,index)=>{
                return(<option key={index}>{data}</option>)
               })
           }
          </select>
          <select className='sel' value={bhk} onChange={e=>setBhk(e.target.value)} >
          <option value={''}>Bhk</option>
           { 
               Myarray.BHK.map((data,index)=>{
                return(<option  key={index}>{data}</option>)
               })
           }
          </select>
      <button onClick={()=>filterItem(price,loc,bhk)}>Apply </button>
    </div>
      <div className='Container'>
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
               < span><a id='rent' href="#" className="btn btn-primary">Rent</a></span>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
  )
}
