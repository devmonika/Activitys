import React from 'react';

const Card = (props) => {
    
    const { time, name, picture }= props.card;
    // console.log( props.card);
 
    // console.log(card);
    const handleAddToCart =(time) =>{
        // console.log(card);
        props.setCart(props.cart+parseFloat(time)); 
    }
    return (
        <div className="card w-full lg:w-72 bg-base-100 shadow-xl">
            <figure className="">
                <img src={picture} alt="" className="w-full h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Activity Name: {name}</h2>
                <p>Activity Time: {time}</p>
                <div className="card-actions">
                <button onClick={()=>handleAddToCart(time)} className="btn border-none text-white bg-red-500 hover:bg-red-600 block">Add Time</button>
                
                </div>
            </div>
            
        </div>
            
  
        
      
    );
};

export default Card;